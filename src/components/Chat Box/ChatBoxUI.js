import React, { useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';
import { Paper, Typography } from '@mui/material';
import { customPaperStyles, customTypographyStyles } from '../MUICustomStyles';


const ChatBoxUI = ({
    chat,
    oldChatSize, // Refer to ChatBoxLogic.js
}) => {
    
    // For scrolling effect. 
    const paperRef = useRef();
    useEffect(() => {
        paperRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chat]);

    // Apply 'typing effect' only to the last message added. 
    // At each interaction, two messages are added (prompt and reply).
    // Only reply must be typed out. 
    const renderTypingEffect = (item, index) =>
        index === chat.length - 1 
            ? <ReactTyped key={item.id} strings={[item.content]} typeSpeed={5} backSpeed={5} loop={false}/>
            : item.content;
    
    return (
        // <CustomPaper {... customPaperStyles}>
        <Paper sx={{
            ...customPaperStyles.sx,
            // left: '1%',

        }}
        variant={customPaperStyles.variant}
        >
            {chat.length > oldChatSize ? (  // Re-render only if the `chat has new messages.
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
        </Paper>
    );
};

export default ChatBoxUI;
 