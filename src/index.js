import React from 'react';
import { createRoot } from 'react-dom/client';
import ChatBoxLogic from './components/ChatBoxLogic';
import InputContainer from './components/InputContainer';
import { GlobalProvider } from './GlobalContext';
// import AudioPlayer from './components/AudioPlayer'
import PlayerLogic from './components/PlayerLogic';
import '../static/css/index.css';
// import { Input } from '@mui/material';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <GlobalProvider>
        <InputContainer />
        <ChatBoxLogic />
        <PlayerLogic />
    </GlobalProvider>
);
