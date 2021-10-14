import React, {useState} from "react";
import {MainLayout} from "../../layouts/MainLayout";
import StepWrapper from "../../Components/StepWrapper";
import {Button, Grid, TextField} from "@mui/material";
import ImageUpLoad from "../../Components/ImageUpLoad";

const Create = () => {

    const [image, setImage] = useState('')

    const [activeStep, setActiveStep] = useState(0)

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep((prev) => prev + 1)
        }
    }
    const back = () => {
        setActiveStep((prev) => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>

                {activeStep === 0 &&
                <Grid container direction={'column'} style={{padding: 20}}>
                    <TextField
                    style={{marginTop: 10}}
                    label={'Author Name'}
                    />
                    <TextField
                    style={{marginTop: 10}}
                    label={'Theme'}
                    />
                </Grid>
                }
                {activeStep == 1 &&
                <ImageUpLoad setImage={setImage} accept={'image/*'}>

                    <Button>Upload image</Button>
                </ImageUpLoad>
                }
                {
                    activeStep === 2 &&
                    <Grid container direction={'column'} style={{padding: 20}}>
                        <TextField
                            style={{marginTop: 10}}
                            label={'Title'}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={'Text for blog'}
                            fullWidth
                            multiline
                            rows={10}
                        />
                    </Grid>

                }

            </StepWrapper>
            <Grid container justifyContent={'space-between'}>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </MainLayout>

    )
};

export default Create