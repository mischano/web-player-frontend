import { display, margin } from "@mui/system";

export const appBarStyles = {
    position: 'fixed',
    sx: {
        /* Positioning */
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        top: 1,

        /* Size */
        width: '98%',
        height: '80px',

        /* Apperance */
        backgroundColor: '#1f1f1f',
        outline: 'solid 1px #fc1c03',
    }
};

export const searchBarContainer = {
    sx: {
        /* Positioning */
        display: 'flex',
        
        /* Apperance */
        outline: 'solid 1px #ecfc03',
    }
};

export const buttonsContainer = {
    sx: {
        /* Positioning */
        display: 'flex',
        justifySelf: 'end',
        
        /* Apperance */
        outline: 'solid 1px #ecfc03',
    }
};