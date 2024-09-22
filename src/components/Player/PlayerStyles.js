export const outterContainer = {
    position:'fixed',
    sx: {
        /* Positioning */
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 'auto', 
        bottom: 1,
        
        /* Sizing */
        width: '100%',
        height: '80px',
        boxSizing: 'border-box',

        /* Spacing */
        padding: 0,
        margin: 0,
       
        /* Apperance */
        // backgroundColor: 'transparent', 
        backgroundColor: '#1f1f1f',
        outline: 'solid 1px #fc1c03',
    },
};

export const innerLeftContainer = {
    sx: {
        /* Positioning */
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        
        /* Sizing */
        flexGrow: 1,
        flexBasis: '25%',
        maxWidth: '25%',
        boxSizing: 'border-box',

        /* Apperance */
        outline: 'solid 1px #ecfc03',
    },
};

export const innerMiddleContainer = {
    sx:{
        /* Positioning */
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        
        /* Sizing */
        flexGrow: 3,
        flexBasis: '40%',
        maxWidth: '40%',
        boxSizing: 'border-box',

        /* Apperance */
        outline: 'solid 1px #ecfc03',
    },
};

export const innerRightContainer = {
    sx:{
        /* Sizing */
        flexGrow: 1,
        flexBasis: '20%',
        maxWidth: '20%',
        boxSizing: 'border-box',
        
        /* Apperance */
        outline: 'solid 1px #ecfc03',
    },
};

export const thumbnailStyles = {
    sx: {
        /* Positioning */
        display: 'flex',
        
        /* Sizing */
        flexGrow: 1,
        flexBasis: '30%',
        maxWidth: '30%',
        boxSizing: 'border-box',
        
        /* Appearance */
        outline: 'solid 1px #377516',
    }
};

export const currentAudioStyles = {
    sx: {
        /* Positioning */
        display: 'flex',
        
        /* Sizing */
        flexGrow: 3,
        flexBasis: '60%',
        maxWidth: '60%',
        boxSizing: 'border-box',
        
        /* Appearance */
        outline: 'solid 1px #377516',
    }
}

export const playerControlStyles = {
    sx:{
        /* Positioning */
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
        /* Appearance */
        outline: 'solid 1px #377516',
    },
};

export const seekBarSliderStyles = {
    sx:{
        /* Positioning */
        display: 'flex',
        
        /* Appearance */
        outline: 'solid 1px #377516',
    },
};

export const iconButtonStyles = {
};
