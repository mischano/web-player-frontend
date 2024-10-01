import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';


const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode, // Keeps dark/light mode consistent
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#E0E3E7',
                        '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderFocusedColor': '#6F7E8C',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiFilledInput: { // Only keeping the filled variant overrides
                styleOverrides: {
                    root: {
                        '&::before, &::after': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
});

const SearchBar = () => {
    const [userInput, setUserInput] = useState('');
    const outerTheme = useTheme();


    return (
        <Box sx={{
            display: 'flex', flexGrow: 1
        }}
        >
            <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField 
                    label="What do you want to play?" variant="filled" 
                    sx={{ 
                        flexGrow: 1,
                }}/>
            </ThemeProvider>
        </Box>
    );
};

export default SearchBar;
