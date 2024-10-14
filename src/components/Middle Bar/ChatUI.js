import React, { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import { Typography } from "@mui/material";
import { customTypography, customTypography2, customTypography3 } from "./ChatUIStyles";
import '../../../static/css/middle.css';


const ChatUI = ({
    message, 
    oldChatSize,
}) => {
    const customPaperUpperRef = useRef(null);

    useEffect(() => {
        if (customPaperUpperRef.current) {
            const width = customPaperUpperRef.current.offsetWidth;
            
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const font = window.getComputedStyle(customPaperUpperRef.current, null).getPropertyValue('font');
            context.font = font;
            console.log('font: ' + font);
            console.log('width: ' + context.measureText('Request').width);
        }

        const handleResize = () => {
            if (customPaperUpperRef.current) {
                const width = customPaperUpperRef.current.offsetWidth;
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [message]);

    const renderTypingEffect = (item, index) =>
        index === message.lenght - 1
        ? <ReactTyped key={item.id} strings={[item.content]} typeSpeed={5} backSpeed={5} loop={false} />
        : item.content;
    
    return (
        <div className="chat-box">
            {message.length > oldChatSize ? (  // Re-render only if the `chat has new messages.
                message.map((couple, coupleIndex) => (
                    <div className="chat-box-inner"> 
                        <div ref={customPaperUpperRef} className="custom-paper-upper" key={coupleIndex}>
                            <Typography
                                sx={{
                                    ...customTypography.sx,
                                    color: couple[0].color,
                                }}
                                variant={customTypography.variant}
                            >
                                {/* renderTypingEffect(couple[0], coupleIndex) */}
                                Box 1
                            </Typography>
                            <Typography
                                sx={{
                                    ...customTypography2.sx,
                                    color: couple[1].color,
                                }}
                                variant={customTypography2.variant}
                            >
                                Box 2 
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
                                Box 3
                                {/* renderTypingEffect(couple[1], coupleIndex) */}
                            </Typography>
                        </div>
                    </div>
                ))
            ) : null }
        </div>
    );
};

export default ChatUI;
