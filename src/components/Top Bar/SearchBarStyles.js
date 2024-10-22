export const textFieldStyles = {
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
            backgroundColor: '#1f1f1f',
        },
    },
};

export const inputLabelPropsStyles = {
    style: { color: '#dedddb' }, // Default label color
    sx: {
        '&.Mui-focused': {
        color: '#ffffff', // Label color when focused
        fontFamily: "'Fira Code', monospace",
        transform: 'scale(0.65)', // Adjust label position and scale when focused
        },
    },
};