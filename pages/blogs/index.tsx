import React from "react";
import {MainLayout} from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import BlogList from "../../Components/BlogList";

const blogs = [
    {name: 'blog1', id: 1},
    {name: 'blog2', id: 2},
    {name: 'blog3', id: 3},
    {name: 'blog4', id: 4},
]

const Index = () => {

    const router = useRouter()

    return (
        <>
            <MainLayout>
                <Grid container justifyContent={'center'}>
                    <Card style={{width: '900'}}>
                        <Box p={3}>
                            <Grid container justifyContent={'space-between'}>
                                <h1>Blogs</h1>
                                <Button onClick={() => router.push('blogs/create')}>Add</Button>
                            </Grid>
                        </Box>
                        <BlogList blogs={blogs}/>
                    </Card>
                </Grid>
            </MainLayout>
        </>
    );
};

export default Index;
