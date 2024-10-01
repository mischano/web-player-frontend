import React from "react";
import SearchBar from "./SearchBar";
import '../../../static/css/top.css';


const TopBarManager = () => {
    return (
        <div className="top-bar-main-container">
            <div className="top-bar-left-container">
                <SearchBar />
            </div>
            <div className="top-bar-middle-container">
                Middle
            </div>
            <div className="top-bar-right-container">
                Right
            </div>
        </div>
    );
};

export default TopBarManager;
