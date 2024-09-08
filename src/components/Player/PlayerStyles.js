export const appBarStyles = {
    position:'fixed',
    sx: {
        top: 'auto', 
        bottom: 0, 
        backgroundColor: 'transparent', 
        boxShadow: 'none', 
        width: '60%',
        maxWidth: '100%',
        minWidth: '300px',
        height: '10vh',
        maxHeight: '15vh',
        minHeight: '1vh',
        right: '0%',
        padding: 0,
        margin: 0,
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
        fontSize: { xs: 15, sm: 20, md: 25, lg: 35 },
        height: '100%',
        color: '#d7ccc8',
    },
};

export const iconButtonStyles = {
    fontSize: 'inherit', 
    height: 'inherit',
};
