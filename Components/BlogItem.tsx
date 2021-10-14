import React from "react";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {MainLayout} from "../layouts/MainLayout";
import {IBlog} from "../types/blog";
import IconButton from "@mui/material/IconButton";
import {Delete, PlusOne} from "@mui/icons-material";

interface BlogItemProps {
    blog: IBlog;
    active?: boolean
}

const BlogItem: React.FC<BlogItemProps> = ({blog, active = false}) => {

    const router = useRouter()

    return (
        <>
            <Card onClick={() => router.push('/blogs/' + blog.id)}>
                <Box m={3}>
                    {blog.name}
                </Box>
                <img width={70} height={70} src={blog.name}/>

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
