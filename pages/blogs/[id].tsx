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


const BlogPage = ({post}) => {

const postComment = useInput('')
    const [newComment, setNewComment] = useState(post)
    const addComment = async ()=>{
        try {
            const response = await axios.post('https://simple-blog-api.crew.red/comments', {
                "postId": post.id,
                "body": postComment.value
            })
            setNewComment({...post, comments: [...post.comments, response.data]})
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
                    <h1>name blog {post && newComment.title}</h1>
                <p>{post && newComment.body}</p>

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
                        newComment.comments && post.comments.map(comment=>
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
    const response =  await axios.get('https://simple-blog-api.crew.red/posts/' + params.id)
    return {
        props: {
            post: response.data
        }
    }
}
