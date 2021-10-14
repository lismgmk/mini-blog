import React, {useRef} from "react";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {MainLayout} from "../layouts/MainLayout";
import {IBlog} from "../types/blog";
import BlogItem from "./BlogItem";

interface ImageUpLoadProps {
    setImage: Function,
    accept: string
}

const ImageUpLoad: React.FC<ImageUpLoadProps> = ({setImage, accept, children}) => {

    const ref = useRef<HTMLInputElement>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.files[0])
    }

    return (
        <div onClick={()=> ref.current.click()}>
            <input
                type="file"
                accept={accept}
                style={{display: 'none'}}
                ref={ref}
        onChange={onChange}
            />
            {children}
        </div>
    );
};

export default ImageUpLoad;
