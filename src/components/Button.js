import React from "react";
import './Button.css';

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className="simple-button">
            {children}
        </button>
    );
};

export default Button;
