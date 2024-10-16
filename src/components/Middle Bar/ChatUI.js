import React, { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import { Typography } from "@mui/material";
import { customTypography, customTypography2, customTypography3 } from "./ChatUIStyles";
import '../../../static/css/middle.css';


const ChatUI = ({
    message, 
    oldChatSize,
}) => {
    const [chatBoxWidth, setChatBoxWidth] = useState(0);
    let idx = 0;
    // const [chat, setChat] = useState([]);

    const customPaperUpperRef = useRef(null);

    useEffect(() => {
        if (customPaperUpperRef.current) {
            let width = customPaperUpperRef.current.offsetWidth;
            setChatBoxWidth(width);
        }
        
        const handleResize = () => {
            if (customPaperUpperRef.current) {
                let width = customPaperUpperRef.current.offsetWidth;
                setChatBoxWidth(width);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [message]);

    const renderTypingEffect = (item, index) =>
        index === message.lenght - 1
        ? <ReactTyped key={item.id} strings={[item.content]} typeSpeed={5} backSpeed={5} loop={false} />
        : item.content;
    
    const printChat = (str) => {
        let currentLine = '';
        idx = 0;
        const chat = str.split(' ');
        
        for (; idx < chat.length; idx++) {
            const nextLine = currentLine + (idx === chat.length - 1 ? chat[idx] : chat[idx] + ' ');
            const currentTextWidth = measureTextWidth(nextLine, customPaperUpperRef.current);
            
            if (currentTextWidth < chatBoxWidth - 5) {
                currentLine = nextLine;
            } else {
                break;
            }
        }
        return currentLine;
    };

    const printRest = (str) => {
        let chat = str.split(' ');
        return chat.slice(idx).join(' ');
    }

    const measureTextWidth = (text, element) => {
        if (element) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const font = window.getComputedStyle(element, null).getPropertyValue('font');
            context.font = font;
            return context.measureText(text).width;
        }
        return 0;
    };

    return (
        <div className="chat-box">
            {message.length > oldChatSize ? (  // Re-render only if the `chat has new messages.
                message.map((couple, coupleIndex) => (
                    <div className="chat-box-inner"> 
                        <div className="custom-paper-upper" key={coupleIndex}>
                            <Typography
                                sx={{
                                    ...customTypography.sx,
                                    color: couple[0].color,
                                }}
                                variant={customTypography.variant}
                            >
                                Box 1
                                {/* renderTypingEffect(couple[0], coupleIndex) */}
                            </Typography>
                            <Typography
                                ref={customPaperUpperRef}    
                                sx={{
                                    ...customTypography2.sx,
                                    color: couple[1].color,
                                }}
                                variant={customTypography2.variant}
                            >
                                {printChat(couple[1].content)}
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
                                {printRest(couple[1].content)}
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
