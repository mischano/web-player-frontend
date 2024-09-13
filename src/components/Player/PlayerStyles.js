export const appBarStyles = {
    position:'fixed',
    sx: {
        /* Positioning */
        top: 'auto', 
        bottom: 0, 
        left: 'calc(1% + 30vw + 10px)', // Adjusted with Input Containers width. 
        
        /* Sizing */
        width: '30%',
        maxWidth: '100%',
        minWidth: '200px',
        height: '10vh',
        maxHeight: '15vh',
        minHeight: '1vh',
        boxSizing:  'border-box',

        /* Spacing */
        padding: 0,
        margin: 0,
       
        /* Apperance */
        backgroundColor: 'transparent', 
        boxShadow: 'none', 
        // outline: 'solid 2px #706969',
    },
};

export const toolBarStyles = {
    sx:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        padding: 0,
        flexGrow: 1,
    },
};

export const boxStyles = {
    sx:{
        display: 'flex',
        gap: { xs: '2px', sm: '4px', md: '6px', lg: '10px'},
        alignItems: 'top',
        fontSize: { xs: 12, sm: 17, md: 24, lg: 28 },
        height: '100%',
        color: '#d7ccc8',
    },
};

export const iconButtonStyles = {
    fontSize: 'inherit', 
    height: 'inherit',
};
