import React from "react";
import {MainLayout} from "../../layouts/MainLayout";
import {Box, Button, Card, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import BlogList from "../../Components/BlogList";
import {IBlog} from "../../types/blog";


const BlogPage = () => {

    const blog: IBlog = {name: 'blog1', id: 1, comments: ['good blog', 'bad vlog']}

    const router = useRouter()

    return (
        <MainLayout>
            <Button variant={'outlined'}

                    onClick={() => router.push('/blogs/')}>All blogs</Button>
            <Grid container>
                <img src={blog.name} alt='' width={200} height={200}/>
                <div>
                    <h1>name blog {blog.name}</h1>
                    <h1>id blod {blog.id}</h1>
                    <h1>{blog.name}</h1>
                </div>
                <h1>Title</h1>
                <p>Loream text</p>

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
                    />
                    <Button>Send</Button>
                </Grid>
                <div>
                    {
                        blog.comments.map(comment=>
                        <div>
                            <div>Name</div>
                            <>Coments {comment}</>
                        </div>)
                    }
                </div>
            </Grid>

        </MainLayout>
    );
};

export default BlogPage;
