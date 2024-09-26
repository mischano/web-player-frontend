import React from "react";
import { AppBar } from "@mui/material";

const Top = () => {
    return (
        <AppBar
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                width: '50%',
                height: '50%',
                
                backgroundColor: 'red',
                outline: 'green',
            }}
        >
        </AppBar>
    );
}

export default Top;
