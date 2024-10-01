import React from 'react';
import { createRoot } from 'react-dom/client';
import TopBarManager from './components/Top Bar/TopBarManager';
import '../static/css/index.css';


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <div className="main">
        <div className="top-bar">
            {/* Top Container */}
            <TopBarManager />
        </div>
        <div className="middle-bar">
            Middle Container
        </div>
        <div className="bottom-bar">
            Lower Container
        </div>
    </div>
);
