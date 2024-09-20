import { padding } from "@mui/system";

export const outterContainer = {
    position:'fixed',
    sx: {
        /* Positioning */
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        top: 'auto', 
        bottom: 5, 
        
        /* Sizing */
        width: '100%',
        height: '18vh',
        overflow: 'hidden',

        /* Spacing */
        padding: 0,
        margin: 0,
       
        /* Apperance */
        // backgroundColor: 'transparent', 
        backgroundColor: '#1f1f1f',
        boxShadow: 'none', 
        // outline: 'solid 1px #fc1c03',
    },
};
export const innerLeftContainer = {
    sx:{
        /* Positioning */
        
        /* Sizing */
        width: '25%',
        height: '90%',
        boxSizing: 'border-box',
        flexGrow: 0,
        
        /* Spacing */
        padding: 0,
        
        /* Apperance */
        outline: 'solid 1px #ecfc03',
    },
};

export const innerRightContainer = {
    sx:{
        /* Positioning */
        
        /* Sizing */
        width: '20%',
        height: '50%',
        boxSizing: 'border-box',
        flexGrow: 0,
        
        /* Spacing */
        padding: 0,
        
        /* Apperance */
        outline: 'solid 1px #ecfc03',
    },
};

export const innerMiddleContainer = {
    sx:{
        /* Positioning */
        display: 'flex',
        flexDirection: 'column',
        
        /* Sizing */
        width: '50%',
        height: '90%',
        boxSizing: 'border-box',
        flexGrow: 0,
        
        /* Spacing */
        padding: 0,
        
        /* Apperance */
        outline: 'solid 1px #ecfc03',
    },
};

export const playerContainer = {
    sx:{
        /* Positioning */
        display: 'flex',
        flexDirection: 'row',
        flex: 9,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        
        /* Sizing */
        width: '40%',
        
        /* Appearance */
        color: '#d7ccc8',
        outline: 'solid 1px #377516',
    },
};

export const sliderContainer = {
    sx:{
        /* Positioning */
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
        
        /* Sizing */
        width: '70%',
        
        /* Appearance */
        color: '#d7ccc8',
        outline: 'solid 1px #377516',
    },
};

export const iconButtonStyles = {
    /* Positioning */
    // alignSelf: 'center',

    /* Sizing */
    // width: 'auto',
    // maxHeight: '100%',
    // maxWidth: '100%',
    // fontSize: '70%', 
    
    /* Appearance */
    outline: 'solid 1px #306969',
};
