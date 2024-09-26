export const outterBox = {
    position:'fixed',
    sx: {
        /* Positioning */
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // top: 'auto', 
        // bottom: 10,
        
        /* Sizing */
        width: '100%',
        height: '180px',
        boxSizing: 'border-box',

        /* Spacing */
        padding: 0,
        margin: 0,
       
        /* Apperance */
        // backgroundColor: 'transparent', 
        backgroundColor: '#1f1f1f',
        outline: 'solid 1px #fc1c03',
    }
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

