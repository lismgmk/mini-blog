import React from "react";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import BlogList from "../Components/BlogList";
import {MainLayout} from "../layouts/MainLayout";
import {NextThunkDispatch, wrapper} from "../store";
import {fetchPosts} from "../store/action-creaters/postsThunk";
import {useTypedSelector} from "../hooks/useTypedSelector";
//
// const blogs = [
//     {name: 'blog1', id: 1},
//     {name: 'blog2', id: 2},
//     {name: 'blog3', id: 3},
//     {name: 'blog4', id: 4},
// ]

const Index = () => {

    const router = useRouter()

    const posts = useTypedSelector(store => store.posts.posts)

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
                        <BlogList posts={posts}/>
                    </Card>
                </Grid>
            </MainLayout>
        </>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchPosts())
})

