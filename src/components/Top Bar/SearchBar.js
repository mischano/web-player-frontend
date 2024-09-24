import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";


const SearchBar = ({ width }) => {
    const [userInput, setUserInput] = useState('');

    return (
        <TextField 
            id="outlined-basic" 
            label="What do you want to play?" 
            variant="outlined" 
            sx={{ 
                flexGrow: 0.9,
                backgroundColor: 'transparent',
                outline: 'solid 1px #ecfc03',
            }}
        />
    );
};

export default SearchBar;
