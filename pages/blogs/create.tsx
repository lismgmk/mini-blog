import React, {useState} from "react";
import {MainLayout} from "../../layouts/MainLayout";
import StepWrapper from "../../Components/StepWrapper";
import {Button, Grid, TextField} from "@mui/material";
import ImageUpLoad from "../../Components/ImageUpLoad";
import {useInput} from "../../hooks/useInput";
import axios from "axios";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {CreatePost} from "../../store/action-creaters/AllActionCreaters";
import {createPost} from "../../store/action-creaters/postsThunk";

const Create = () => {

    const [image, setImage] = useState('')
    const title = useInput('')
    const body = useInput('')
    const router = useRouter()

const dispatch = useDispatch()

    const [activeStep, setActiveStep] = useState(0)
    const data = {
        'title': title.value,
        'body': body.value
    }
    const next = () => {
        if (activeStep !== 2) {
            setActiveStep((prev) => prev + 1)
        } else {
            // dispatch(createPost(data))

            axios.post('https://simple-blog-api.crew.red/posts/', data)
                .then(resp => router.push('/'))
                .catch(e => console.log(e))
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
                        label={'Title'}
                        {...title}
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={'Body'}
                        {...body}
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