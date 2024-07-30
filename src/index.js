import React from 'react';
import { createRoot } from 'react-dom/client';
import ChatBox from './components/ChatBox';
import InputContainer from './components/InputContainer';
import { GlobalProvider } from './GlobalContext';
import AudioPlayer from './components/AudioPlayer';
import Playlist from './components/Playlist';
import '../static/css/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <GlobalProvider>
        <div id="chat-box"><ChatBox /></div>
        <div id="input-container"><InputContainer /></div>
        <div id="audio-playlist"><Playlist /></div>
        <AudioPlayer />
    </GlobalProvider>
);
