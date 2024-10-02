import React from "react";
import ChatUI from "./ChatUI";
import '../../../static/css/middle.css';

const MiddleBar = () => {
    return (
        <div className="middle-bar-main-container">
            <div className="middle-bar-left-container">
                {/* <div className="custom-paper"> */}
                    <ChatUI />    
                {/* </div> */}
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
