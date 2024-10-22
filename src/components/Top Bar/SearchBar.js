import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useGlobal } from '../../GlobalContext';
import { textFieldStyles, inputLabelPropsStyles } from "./SearchBarStyles";


const SearchBar = () => {
    const { setGlobalUserMessage } = useGlobal();
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false); // `loading` is set to true if audio is being fetched. False otherwise. 
    const [error, setError] = useState(null);

    //  * React state updates are sometimes optimized to ignore updates that don't actually change the state value. 
    //  * Ex: User entering the same input more than once. Since the state `message` is being set to the same value, 
    //  * re-render is not being triggered. To ensure re-mount and re-render are triggered even if the same data is 
    //  * entered, we use unique key that will help us to re-mount and re-render.  
    const [key, setKey] = useState(0);  

    useEffect(() => {
        if (loading) {
            setUserInput('Loading...');
        } else {
            setUserInput('');
        }
    }, [loading]);

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    // If `Enter` key is pressed, handle the user input. 
    const handleKeyDown = (event) => {
        if (event.key !== 'Enter') {
            return;
        }
        event.preventDefault();
        if (userInput.trim().length > 0) {
            setGlobalUserMessage(userInput);
        }
        setUserInput('');
        setKey(prevKey => prevKey + 1);
    };

    return (
        <TextField
            id="outlined-start-adornment"
            label="What do you want to play?"
            sx={textFieldStyles}
            InputLabelProps={inputLabelPropsStyles}
            value={userInput}
            key={key}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            // InputProps={{
            //     readOnly: loading,
            // }}
        />
    );
};

export default SearchBar;
