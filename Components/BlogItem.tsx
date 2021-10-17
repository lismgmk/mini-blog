import React from "react";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {MainLayout} from "../layouts/MainLayout";
import IconButton from "@mui/material/IconButton";
import {Delete, PlusOne} from "@mui/icons-material";
import {IPost} from "../types/posts";

interface BlogItemProps {
    post: IPost;
    active?: boolean
}

const BlogItem: React.FC<BlogItemProps> = ({post, active = false}) => {

    const router = useRouter()

    return (
        <>
            <Card onClick={() => router.push('/blogs/' + post.id)}>
                <Box m={3}>
                    {post.title}
                </Box>
                <img width={70} height={70} src={''}/>
                <Box m={3}>
                    {post.body}
                </Box>

            </Card>

            <IconButton onClick={(e)=> e.stopPropagation()}>
                <Delete/>
            </IconButton>
            <IconButton onClick={(e)=> e.stopPropagation()}>
                <PlusOne/>
            </IconButton>
        </>

    );
};

export default BlogItem;

