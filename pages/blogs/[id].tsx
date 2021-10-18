import React, {useEffect, useState} from "react";
import {MainLayout} from "../../layouts/MainLayout";
import {Box, Button, Card, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import BlogList from "../../Components/BlogList";
import {NextThunkDispatch, wrapper} from "../../store/redusers";
import {fetchPost, fetchPosts} from "../../store/action-creaters/postsThunk";
import Index from "../index";
import {GetServerSideProps} from "next";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import axios from "axios";
import {nanoid} from "nanoid";
import {useInput} from "../../hooks/useInput";


export type resCommentType = {
    "postId": number,
    "body": string,
    "id": number
}

const BlogPage = ({post}) => {

    const postComment = useInput('')
    const [newComment, setNewComment] = useState(post)

    const addComment = async () => {
        try {
            const response = await axios.post<resCommentType>('https://simple-blog-api.crew.red/comments',
                {
                    "postId": newComment.id,
                    "body": postComment.value
                })
            console.log(response.data.body)
            setNewComment({...newComment, comments: [...newComment.comments, response.data]})
        } catch (e) {
            console.log(e)
        }
    }

    const router = useRouter()
    return (
        <MainLayout>
            <Button variant={'outlined'}

                    onClick={() => router.push('/')}>All blogs</Button>
            <Grid container>
                {/*<img src={post.id} alt='' width={200} height={200}/>*/}
                <h1>name blog {newComment.title}</h1>
                <p>{newComment.body}</p>

                <h1>Comments</h1>
                <Grid container>
                    <TextField
                        label={'Name'}
                        fullWidth
                    />
                    <TextField
                        label={'Comment'}
                        fullWidth
                        multiline
                        rows={4}
                        {...postComment}
                    />
                    <Button onClick={addComment}>Send</Button>
                </Grid>
                <div>
                    {
                        newComment.comments.map(comment =>
                            <div key={nanoid()}>
                                {comment.body}
                            </div>)
                    }
                </div>
            </Grid>

        </MainLayout>
    );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('https://simple-blog-api.crew.red/posts/' + params.id + '?_embed=comments')
    return {
        props: {
            post: response.data
        }
    }
}
