import React from "react";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {MainLayout} from "../layouts/MainLayout";
import {IBlog} from "../types/blog";
import BlogItem from "./BlogItem";

interface BlogListProps {
    blogs: IBlog[]
}

const BlogList: React.FC<BlogListProps> = ({blogs}) => {

    return (
        <>
                <Grid container direction={'column'}>

                        <Box p={3}>
                            {blogs.map(blog=>
                                <Box p={3}>
                                    <BlogItem key={blog.id} blog={blog}/>
                                </Box>

                            )}
                        </Box>


                </Grid>
        </>
    );
};

export default BlogList;
