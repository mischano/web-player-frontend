import React, { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import { Typography } from "@mui/material";
import { customTypography, customTypography2, customTypography3 } from "./ChatUIStyles";
import '../../../static/css/middle.css';
import { render } from "react-dom";


const ChatUI = ({
    newMessage, 
    oldChatSize,
}) => {
    const [chat, setChat] = useState([]);
    const [chatBoxWidth, setChatBoxWidth] = useState(0);
    
    const customPaperUpperRef = useRef(null);
    
    let idx = 0;

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

    }, [newMessage]);

    // const renderTypingEffect = (item, index) =>
    //     index === newMessage.lenght - 1
    //     ? <ReactTyped key={item.id} strings={[item.content]} typeSpeed={5} backSpeed={5} loop={false} />
    //     : item.content;
    
    // const renderTypingEffect = (item) => {
    //     <ReactTyped key={item.id} strings={[item.content]} typeSpeed={5} backSpeed={5} loop={false} />
    // };

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

    const printPrompt = (message, isTyped) => {
        let str = message.slice(0).join(' ');
        if (isTyped) {
            return <ReactTyped strings={[str]} typeSpeed={5} backSpeed={5} loop={false} />
        }
        return str;
    };

    const printFirstLine = (message, isTyped) => {
        idx = 0;
        let currentLine = '';
        for (; idx < message.length; idx++) {
            const nextLine = currentLine + (idx === message.length - 1 ? message[idx] : message[idx] + ' ');
            const currentTextWidth = measureTextWidth(nextLine, customPaperUpperRef.current);
            if (currentTextWidth < chatBoxWidth - 5) {
                currentLine = nextLine;
            } else {
                break;
            }
        }
        
        if (isTyped) {
            return <ReactTyped strings={[currentLine]} typeSpeed={5} backSpeed={5} loop={false} />
        }

        return currentLine;
    };

    const printRest = (message, isTyped) => {
        let str = message.slice(idx).join(' ');
        if (isTyped) {
            return <ReactTyped strings={[str]} typeSpeed={5} backSpeed={5} loop={false} />
        }
        return str;
    };

    return (
        <div className="chat-box">
            {chat.map((item, index) => (
                    <div className="chat-box-inner" key={index}> 
                        <div className="custom-paper-upper">
                            <Typography
                                sx={{
                                    ...customTypography.sx,
                                    color: item[0].color,
                                }}
                                variant={customTypography.variant}
                            >
                                {printPrompt(item[0].content, false)}
                            </Typography>
                            <Typography
                                ref={customPaperUpperRef}    
                                sx={{
                                    ...customTypography2.sx,
                                    color: item[1].color,
                                }}
                                variant={customTypography2.variant}
                            >
                                {printFirstLine(item[1].content, false)}
                            </Typography>
                        </div>
                        <div className="custom-paper-lower">
                            <Typography
                                sx={{
                                    ...customTypography3.sx,
                                    color: item[1].color,
                                }}
                                variant={customTypography3.variant}
                            >
                                {printRest(item[1].content, false)}
                            </Typography>
                        </div>
                    </div>
                ))
            }
            {newMessage.length > 0 ? (
                <div className="chat-box-inner">
                    <div className="custom-paper-upper">
                        <Typography
                            sx={{
                                ...customTypography.sx,
                                color: newMessage[0].color,
                            }}
                            variant={customTypography.variant}
                        >
                            {printPrompt(newMessage[0].content, true)}
                        </Typography>
                        <Typography
                            ref={customPaperUpperRef}    
                            sx={{
                                ...customTypography2.sx,
                                color: newMessage[1].color,
                            }}
                            variant={customTypography2.variant}
                        >
                            {printFirstLine(newMessage[1].content, true)}
                        </Typography>
                    </div>
                    <div className="custom-paper-lower">
                        <Typography
                            sx={{ 
                                ... customTypography3.sx,
                                color: newMessage[1].color,
                            }}
                            variant={customTypography3.variant}
                        >
                            {printRest(newMessage[1].content, true)}
                        </Typography>
                    </div>
                </div>
            ) : null }
        </div>
    );
};

export default ChatUI;
