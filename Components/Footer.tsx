import React from "react";
import {Box, Button, Card, Container, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {MainLayout} from "../layouts/MainLayout";
import {IBlog} from "../types/blog";
import BlogItem from "./BlogItem";


const Footer = () => {
    const router = useRouter()
    return (
        <>
            <div className='center'>
                <Grid container>
                    <Box p={3}>
                        Footer for All blogs
                    </Box>
                    <Button onClick={() => router.push('/')}>Main</Button>
                </Grid>
            </div>
            <style jsx>
                {`
                  .center {
                    height: 60px;
                    width: 100%;
                    position: fixed;
                    bottom: 0;
                    padding: 0 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: blue;
                  }
                `}
            </style>
        </>

    );
};

export default Footer;
