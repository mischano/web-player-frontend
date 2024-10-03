import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
const SearchBar = () => {
    return (
        <TextField
        label="What do you want to play?"
        id="outlined-start-adornment"
        sx={{ 
            m: 1, 
            width: '40ch',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#dedddb', // Default outline color
                    borderWidth: '1.5px',
                },
                '&:hover fieldset': {
                    borderColor: '#fbfcf8', // Outline color on hover
                    borderWidth: '2px',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#ffffff', // Outline color when focused
                    borderWidth: '2.5px',
                },
                '& .MuiInputBase-input': {
                    color: 'white', // Font color for input text
                    fontFamily: "'Fira Code', monospace",
                },
            },
        }}
        InputLabelProps={{
            style: { color: '#dedddb' }, // Default label color
            sx: {
              '&.Mui-focused': {
                color: '#ffffff', // Label color when focused
                fontFamily: "'Fira Code', monospace",
                transform: 'scale(0.65)', // Adjust label position and scale when focused
              },
            },
        }}
        // slotProps={{
        //   input: {
        //     startAdornment: <InputAdornment position="start"></InputAdornment>,
        //   },
        // }}
      />
    );
};

export default SearchBar;
