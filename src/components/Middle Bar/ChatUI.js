import React, { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import { Typography } from "@mui/material";
import { customTypography, customTypography2, customTypography3 } from "./ChatUIStyles";
import '../../../static/css/middle.css';


const ChatUI =  ({
    newMessage, 
}) => {
    const [intermediateMessage, setIntermediateMessage] = useState([]);
    const [chat, setChat] = useState([]);
    const [chatBoxWidth, setChatBoxWidth] = useState(0);
    const [isCommandDonePrinting, setIsCommandDonePrinting] = useState(false);
    const [isFirstLineDonePrinting, setIsFirstLineDonePrinting] = useState(false);
    const [isDonePrinting, setIsDonePrinting] = useState(false);
    
    const customPaperUpperRef = useRef(null);

    let wordCount = 0;

    useEffect(() => {
        if (newMessage.length > 0) {
            console.log('new message!');
            setIntermediateMessage(newMessage);
        }

        if (customPaperUpperRef.current) {
            let width = customPaperUpperRef.current.offsetWidth;
            setChatBoxWidth(width);

            setIsCommandDonePrinting(false);
            setIsFirstLineDonePrinting(false);
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

    useEffect (() => {
        if (isCommandDonePrinting && isFirstLineDonePrinting && isDonePrinting) {
            setChat((prevChat) => [...prevChat, newMessage]);
            setIntermediateMessage(null);
        }
    }, [isCommandDonePrinting, isFirstLineDonePrinting, isDonePrinting]);

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

    const printCommand = (message, isTyped) => {
            let words = message.slice(0).join(' ');
            if (isTyped) {
                return (
                    <ReactTyped strings={[words]} typeSpeed={10} backSpeed={1} loop={false} onComplete={() => setIsCommandDonePrinting(true)}/>
                );
            }
            return words;  
    };

    const printTheFirstLine = (message, isTyped) => {
            wordCount = 0;
            let currentLine = '';
            for (; wordCount < message.length; wordCount++) {
                const nextLine = currentLine + (wordCount === message.length - 1 ? message[wordCount] : message[wordCount] + ' ');
                const currentTextWidth = measureTextWidth(nextLine, customPaperUpperRef.current);
                if (currentTextWidth < chatBoxWidth - 5) {
                    currentLine = nextLine;
                } else {
                    break;
                }
            }
            if (isTyped) {
                return (
                    <ReactTyped strings={[currentLine]} typeSpeed={10} backSpeed={1} loop={false} onComplete={() => {setIsFirstLineDonePrinting(true)}}/>
                );
            }
            return currentLine;
    };

    const printMessageTheRest = (message, isTyped) => {
        let words = message.slice(wordCount).join(' ');
        if (isTyped) {
            return <ReactTyped strings={[words]} typeSpeed={10} backSpeed={5} loop={false} onComplete={() => {setIsDonePrinting(true)}}/>
        }
        return words;
    };

    return (
        <div className="chat-box">
            {chat.length > 0 ? (chat.map((item, index) => (
                    <div className="chat-box-inner" key={index}> 
                        <div className="custom-paper-upper">
                            <Typography
                                sx={{
                                    ...customTypography.sx,
                                    color: item[0].color,
                                }}
                                variant={customTypography.variant}
                            >
                                {printCommand(item[0].content, false)}
                            </Typography>
                            <Typography
                                sx={{
                                    ...customTypography2.sx,
                                    color: item[1].color,
                                }}
                                variant={customTypography2.variant}
                            >
                                {printTheFirstLine(item[1].content, false)}
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
                                {printMessageTheRest(item[1].content, false)}
                            </Typography>
                        </div>
                    </div>
                ))) 
                : null
            }
            {intermediateMessage.length > 0 ? (
                <div className="chat-box-inner">
                    <div className="custom-paper-upper">
                        <Typography
                            sx={{
                                ...customTypography.sx,
                                color: intermediateMessage[0].color,
                            }}
                            variant={customTypography.variant}
                        >
                            {printCommand(intermediateMessage[0].content, true)}
                        </Typography>
                        <Typography
                            ref={customPaperUpperRef}    
                            sx={{
                                ...customTypography2.sx,
                                color: intermediateMessage[1].color,
                            }}
                            variant={customTypography2.variant}
                        >
                            {isCommandDonePrinting ? printTheFirstLine(intermediateMessage[1].content, true) : null}
                        </Typography>
                    </div>
                    <div className="custom-paper-lower">
                        <Typography
                            sx={{ 
                                ... customTypography3.sx,
                                color: intermediateMessage[1].color,
                            }}
                            variant={customTypography3.variant}
                        >
                            {isFirstLineDonePrinting ? printMessageTheRest(intermediateMessage[1].content, true) : null}
                        </Typography>
                    </div> 
                </div>
            ) : null }
        </div>
    );
};

export default ChatUI;
