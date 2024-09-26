import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalProvider } from './GlobalContext';
import AudioManager from './components/AudioManager';
// import ChatBoxLogic from './components/Chat Box/ChatBoxLogic';
// import InputContainer from './components/Input Container/InputContainer';
import '../static/css/index.css';
import { AppBar, Toolbar } from '@mui/material';
import Top from './Top';
import Middle from './Middle';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <AppBar className="appBar">
        <Toolbar className="upperContainer">
        </Toolbar>
        <Toolbar className="lowerContainer">
        </Toolbar>
    </AppBar>
    // <AppBar
    //     sx={{
    //         display: 'flex',
    //         justifyContent: 'row',
    //         alignContent: 'center',

    //         width: '100%',
    //         height: '100%',

    //         backgroundColor: 'white', 
    //         outline: 'white',
    //     }}
    // >
    //     <Toolbar
    //         sx={{
    //             /* Positioning */
    //             display: 'flex',
    //             justifyContent: 'space-between',
    //             flexDirection: 'row',
                
    //             /* Sizing */
    //             flexGrow: 1,
    //             flexBasis: '25%',
    //             maxWidth: '25%',
    //             boxSizing: 'border-box',

    //             /* Apperance */
    //             // outline: 'solid 1px #ecfc03',
    //         }} 
    //     >
    //     </Toolbar>
    //     <Toolbar
    //         sx={{
    //             /* Positioning */
    //             display: 'flex',
    //             justifyContent: 'space-between',
    //             flexDirection: 'row',
                
    //             /* Sizing */
    //             flexGrow: 1,
    //             flexBasis: '25%',
    //             maxWidth: '25%',
    //             boxSizing: 'border-box',

    //             /* Apperance */
    //             // outline: 'solid 1px #ecfc03',
    //         }} 
    //     >
    //     </Toolbar>
    // </AppBar>
);
