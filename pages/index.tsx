import React from "react";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import BlogList from "../Components/BlogList";
import {MainLayout} from "../layouts/MainLayout";
import {fetchPosts} from "../store/action-creaters/postsThunk";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../store/redusers";
import {GetServerSideProps} from "next";


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



// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps( (store) =>
//     async ({store})=> {
//         const dispatch = store.dispatch as NextThunkDispatch
//        const props = await dispatch(await fetchPosts())
// return props
// }
// )

Index.getInitialProps = wrapper.getInitialPageProps(store => async({pathname, req, res}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchPosts())
});

export default Index;