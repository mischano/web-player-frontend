import { boxSizing, maxWidth, styled } from "@mui/system";
import { Paper } from "@mui/material";

export const red ='#ef5350';
export const white ='#ffffffb6';
export const green = '#26a69a';
export const blue = '#29b6f6';

export const customPaperStyles = {
    position: 'fixed',
    sx:{ 
        /* Positioning */
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        // flex: ,
        flexGrow: 1,
        // maxWidth: ,
        boxSizing: 'border-box',
      
        /* Sizing */
        width: '100%',
        height: '100%',
        maxWidth: '30vw',
        maxHeight: '80vh',
        boxSizing: 'border-box',
       
        /* Spacing */
        padding: '10px',
        borderRadius: '20px',
        
        /* Apperance */
        backgroundColor: '#000',
        outline: 'solid 2px #706969',

        /* Functionality */
        overflowY: 'auto',
    },
};

export const customTypographyStyles = {
    variant:"body1",
    sx:{
        width: '90%',
        margin: '0 auto',
        marginLeft: '-3px',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        padding: '2px',
        lineHeight: 1.2,
        fontFamily: 'Fira Code, monospace',
        fontSize: '13px',
        fontWeight: 'normal',
        overflowY: 'auto',
    },
};

// Directly from ChatGPT. 
export const CustomPaper = styled(Paper)({
        /* Customizing the scrollbar track */
    '::-webkit-scrollbar-track': {
        backgroundColor: '#000',
        borderRadius: '5px',
    },

    /* Customizing the scrollbar */
    '::-webkit-scrollbar': {
        width: '6px',  // Width of the scrollbar
        height: '6px', // Height of the scrollbar
    },

    /* Customizing the thumb (the part that can be dragged) */
    '::-webkit-scrollbar-thumb': {
        backgroundColor: '9e9e9e', // Color of the thumb
        borderRadius: '5px',
        border: '1px solid #ffffffb6', // Adds space around the thumb
    },
    
    /* Customizing the thumb on hover */
    '::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#ffffffb6', // Darker color when hovered
    },
});
