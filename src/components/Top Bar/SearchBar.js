import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";


const SearchBar = () => {
    const [userInput, setUserInput] = useState('');

    return (
        <Box
            component="form"
            sx={{
                 '& > :not(style)' : { 
                    
                m: 1, 
                width: '100%', 
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                // flewGrow: 100,
                // p: 1,
                backgroundColor: '#ddf542',
            } }}
            noValidate
            autoComplete="off"
        >
            <TextField 
                id="outlined-basic" 
                label="What do you want to play?" 
                variant="outlined" 
                InputLabelProps={{
                    sx: {
                        // flewGrow: 100,
                        width: '100%'
                        // // Customize label text
                        // fontFamily: 'Courier, monospace',  // Change label font
                        // color: 'red',  // Change label color
                    },
                }}/>
        </Box>
    );
};

export default SearchBar;
