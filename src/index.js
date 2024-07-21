import React from 'react';
import { createRoot } from 'react-dom/client';
import ChatBox from './components/ChatBox';
import InputContainer from './components/InputContainer';
import { GlobalProvider } from './GlobalContext';
import '../static/css/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <GlobalProvider>
        <div id="chat-box"><ChatBox /></div>
        <div id="input-container"><InputContainer /></div>
    </GlobalProvider>
);
