import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";


const SearchBar = () => {
    const [userInput, setUserInput] = useState('');

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)' : { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField 
                id="outlined-basic" 
                label="What do you want to play?" 
                variant="outlined" 
                InputLabelProps={{
                    sx: {
                        // // Customize label text
                        // fontFamily: 'Courier, monospace',  // Change label font
                        // color: 'red',  // Change label color
                    },
                }}/>
        </Box>
    );
};

export default SearchBar;
