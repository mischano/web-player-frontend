import React from "react";
import Chat from "./Chat";
import '../../../static/css/middle.css';


const MiddleBar = () => {
    return (
        <div className="middle-bar-main-container">
            <div className="middle-bar-left-container">
                <Chat />
            </div>
            <div className="middle-bar-middle-container">
                Middle Middle Bar
            </div>
            <div className="middle-bar-right-container">
                Middle Right Bar
            </div>
        </div>
    );
};

export default MiddleBar;
