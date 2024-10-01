import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const SearchBar = () => {
    return (
        <TextField 
            label="What do you want to play?" variant="filled" 
            multiline={true}
            rows={2}
            sx={{ 
                flexGrow: 1,
                border: '1px solid #ccc',
                backgroundColor: 'white',
                borderRadius: '10px',
                // border: '1px solid #008000',
        }}/>
    );
};

export default SearchBar;
