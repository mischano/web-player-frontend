import React from 'react';
import { createRoot } from 'react-dom/client';
import TopBar from './components/Top Bar/TopBar';
import MiddleBar from './components/Middle Bar/MiddleBar';
import '../static/css/index.css';


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <div className="main">
        <div className="top-bar">
            <TopBar/>
        </div>
        <div className="middle-bar">
            <MiddleBar/>
        </div>
        <div className="bottom-bar">
            Lower Container
        </div>
    </div>
);
