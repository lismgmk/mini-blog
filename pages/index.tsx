import React from 'react';
import {Button} from "@mui/material";
import NavBar from "../Components/NavBar";


const Index = () => {
    return (
        <>
            <NavBar/>
                <div className="center">
                    <h1>Добро пожаловать!</h1>
                    <h3>Здесь собраны лучшие треки!</h3>
                    <Button>25</Button>
                </div>

            <style jsx>
                {`
                    .center {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center}
                `}
            </style>
        </>
    );
};

export default Index;
