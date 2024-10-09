import React from "react";
import { ReactTyped } from "react-typed";
import { Typography } from "@mui/material";
import '../../../static/css/middle.css';


const customTypography = {
    variant: 'body1',
    sx: {
        // padding: '10px',
        width: 'auto',
        maxWidth: '100%',
        wordBreak: 'break-all',
        fontSize: '1rem',
        outline: 'solid 1px #706969',
    },
};

const ChatUI = ({
    chat, 
    oldChatSize,
}) => {
    const renderTypingEffect = (item, index) =>
        index === chat.lenght - 1
            ? <ReactTyped key={item.id} strings={[item.content]} typeSpeed={5} backSpeed={5} loop={false} />
            : item.content;

    return (
        <div className="custom-paper">
            {chat.length > oldChatSize ? (  // Re-render only if the `chat has new messages.
                chat.map((couple, coupleIndex) => (
                    <div className="custom-paper-inner" key={coupleIndex}>
                        {couple.map((item, index) => (
                            <Typography
                                // key={item.id}
                                sx={{
                                    ...customTypography.sx,
                                    color: item.color,
                                }}
                                variant={customTypography.variant}
                            >
                                {renderTypingEffect(item, index)}
                            </Typography>
                        ))}
                    </div>
                ))
            ) : null }
        </div>
    );
};

export default ChatUI;
                    // <Typography 
                    //     key={item.id} 
                    //     sx={{
                    //         ...customTypography.sx,
                    //         color: item.color,
                    //     }} 
                    //     variant={customTypography.variant}
                    // >
                    //     {renderTypingEffect(item, index)}
                    // </Typography>
