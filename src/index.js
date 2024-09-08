import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalProvider } from './GlobalContext';
import AudioManager from './components/AudioManager';
import ChatBoxLogic from './components/Chat Box/ChatBoxLogic';
import InputContainer from './components/Input Container/InputContainer';
import '../static/css/index.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <GlobalProvider>
        <InputContainer />
        <ChatBoxLogic />
        <AudioManager />
    </GlobalProvider>
);
