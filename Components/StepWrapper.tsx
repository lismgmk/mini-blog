import React from "react";
import {Box, Button, Card, Container, Grid, Step, StepLabel, Stepper} from "@mui/material";
import {useRouter} from "next/router";
import {MainLayout} from "../layouts/MainLayout";
import {IBlog} from "../types/blog";
import BlogItem from "./BlogItem";

interface StepWrapperProps {
    activeStep: number
}

const steps = ['Enter your Name', 'Enter Title', 'Enter Text']

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {

    return (
        <>
<Container>
    <Stepper activeStep={activeStep}>
        {steps.map((step,index) =>
        <Step
            key={index}
        completed={activeStep > index}
        >
            <StepLabel>{step}</StepLabel>
        </Step>
        )}
    </Stepper>
    <Grid container justifyContent={'center'} style={{margin: '70px 0', height: 270}}>
        <Card style={{width: 600}}>
            {children}
        </Card>
    </Grid>
</Container>
        </>
    )
}

export default StepWrapper;
