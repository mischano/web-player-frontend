import React from 'react';
import { createRoot } from 'react-dom/client';
import ChatBoxLogic from './components/Chat Box/ChatBoxLogic';
import InputContainer from './components/Input Container/InputContainer';
import { GlobalProvider } from './GlobalContext';
// import AudioPlayer from './components/AudioPlayer'
// import PlayerLogic from './components/PlayerLogic';
import PlayerManager from './components/PlayerManager';
import '../static/css/index.css';
// import { Input } from '@mui/material';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <GlobalProvider>
        <InputContainer />
        <ChatBoxLogic />
        <PlayerManager />
    </GlobalProvider>
);
