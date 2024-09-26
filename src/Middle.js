import React from "react";
import { AppBar } from "@mui/material";

const Middle = () => {
    return (
        <AppBar
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                width: '50%',
                height: '50%',
                backgroundColor: 'blue', 
                outline: 'orange',
            }} 
        >

        </AppBar>
    );
};

export default Middle;
