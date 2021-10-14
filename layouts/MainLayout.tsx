import React from "react";
import NavBar from "../Components/NavBar";
import {Container} from "@mui/material";
import Footer from "../Components/Footer";

export const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <NavBar/>
            <Container style={{margin: '90px 0px'}}>
                {children}
            </Container>
            <Footer/>
        </>
    );
};