import React from "react";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {MainLayout} from "../layouts/MainLayout";
import BlogItem from "./BlogItem";
import {IPost} from "../types/posts";
import {nanoid} from "nanoid";

interface BlogListProps {
    posts: IPost[]
}

const BlogList: React.FC<BlogListProps> = ({posts}) => {

    return (
        <>
                <Grid container direction={'column'}>

                        <Box p={3}>
                            {posts.map(post=>
                                <Box
                                    key={nanoid()}
                                    p={3}>
                                    <BlogItem key={post.id} post={post}/>
                                </Box>

                            )}
                        </Box>
                </Grid>
        </>
    );
};

export default BlogList;
