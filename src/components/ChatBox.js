import React, { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { ReactTyped } from "react-typed";
import { customPaperStyles, customTypographyStyles, CustomPaper } from "./ChatBoxStyles";
import './ChatBox.css';


const ChatBox = ({
    chat,
    oldChatSize,
}) => {
    const paperRef = useRef();

    useEffect(() => {
        paperRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chat]);

    const renderTypingEffect = (item, index) =>
        index === chat.length - 1 
            ? <ReactTyped key={item.id} strings={[item.content]} typeSpeed={5} backSpeed={5} loop={false}/>
            : item.content;
    
    return (
        <CustomPaper {... customPaperStyles}>
            {chat.length > oldChatSize ? (
                chat.map((item, index) => (
                    <Typography 
                        key={item.id} 
                        sx={{
                            ...customTypographyStyles.sx,
                            color: item.color,
                        }} 
                        variant={customTypographyStyles.variant}
                    >
                        {renderTypingEffect(item, index)}
                    </Typography>
                ))
            ) : null }
        </CustomPaper> 
    );
};

export default ChatBox;
 