import React from 'react';
import { createRoot } from 'react-dom/client';
import ChatBox from './components/ChatBox';
import InputContainer from './components/InputContainer';
import { GlobalProvider } from './GlobalContext';
// import AudioPlayer from './components/AudioPlayer'
import Player from './components/navbar_bar/Player';
import '../static/css/index.css';
// import { Input } from '@mui/material';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <GlobalProvider>
        <InputContainer />
        <ChatBox />
        <Player />
    </GlobalProvider>
);
