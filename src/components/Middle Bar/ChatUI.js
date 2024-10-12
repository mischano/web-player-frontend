import React, { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import { Typography } from "@mui/material";
import '../../../static/css/middle.css';
import { height, maxHeight } from "@mui/system";


const customTypography = {
    variant: 'body1',
    sx: {
        flexShrink: 0,
        width: 'auto',
        
        whiteSpace: 'nowrap',
        marginRight: '5px',

        fontSize: 'calc(.8rem + 0.3vw)',
        // outline: 'solid 1px #e9f542',
    },
};

const customTypography2 = {
    variant: 'body1',
    sx: {
        flexGrow: 1,
        
        wordBreak: 'break-all',
       
        fontSize: 'calc(.8rem + 0.3vw)',
        // outline: 'solid 1px #ebf702',
    },
};

const customTypography3 = {
    variant: 'body1',
    sx: {
        flexGrow: 1,
        
        wordBreak: 'break-all',
       
        fontSize: 'calc(.8rem + 0.3vw)',
        // outline: 'solid 1px #ebf702',
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
        <div className="chat-box">
            {chat.length > oldChatSize ? (  // Re-render only if the `chat has new messages.
                chat.map((couple, coupleIndex) => (
                    <div className="chat-box-inner"> 
                        <div className="custom-paper-upper" key={coupleIndex}>
                            <Typography
                                sx={{
                                    ...customTypography.sx,
                                    color: couple[0].color,
                                }}
                                variant={customTypography.variant}
                            >
                                {renderTypingEffect(couple[0], coupleIndex)}
                            </Typography>
                            <Typography
                                sx={{
                                    ...customTypography2.sx,
                                    color: couple[1].color,
                                }}
                                variant={customTypography2.variant}
                            >
                                2402 Eva Ct, Campbell, California 95008, United States of America
                                {/* {renderTypingEffect(couple[1], coupleIndex)} */}
                            </Typography>
                        </div>
                        <div className="custom-paper-lower">
                            <Typography
                                sx={{
                                    ...customTypography3.sx,
                                    color: couple[1].color,
                                }}
                                variant={customTypography3.variant}
                            >
                                {renderTypingEffect(couple[1], coupleIndex)}
                            </Typography>
                        </div>
                    </div>
                ))
            ) : null }
        </div>
    );
};

export default ChatUI;

                        {/* {couple.map((item, index) => (
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
                        ))} */}
