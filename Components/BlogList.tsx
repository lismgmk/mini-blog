import React from "react";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {MainLayout} from "../layouts/MainLayout";
import {IBlog} from "../types/blog";
import BlogItem from "./BlogItem";
import {IPost} from "../types/posts";

interface BlogListProps {
    posts: IPost[]
}

const BlogList: React.FC<BlogListProps> = ({posts}) => {

    return (
        <>
                <Grid container direction={'column'}>

                        <Box p={3}>
                            {posts.map(blog=>
                                <Box p={3}>
                                    <BlogItem key={blog.id} post={blog}/>
                                </Box>

                            )}
                        </Box>
                </Grid>
        </>
    );
};

export default BlogList;
