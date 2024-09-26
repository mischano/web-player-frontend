import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { red } from '@mui/material/colors';


const SearchBar = () => {
    const [userInput, setUserInput] = useState('');

    return (
        <TextField 
            id="outlined-basic" 
            label="What do you want to play?" 
            variant="outlined" 
            sx={{ 
                flexGrow: 1.2,
                backgroundColor: red[500],
                outline: 'solid 1px #ecfc03',
            }}
        />
    );
};

export default SearchBar;
