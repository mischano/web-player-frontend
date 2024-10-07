import React from "react";
import { ReactTyped } from "react-typed";
import { Typography } from "@mui/material";
import '../../../static/css/middle.css';


const customTypography = {
    variant: 'body1',
    sx: {
        // padding: '10px',
        width: '100%',
        maxWidth: '100%',
        wordBreak: 'break-all',
        fontSize: '18px',
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
                chat.map((item, index) => (
                    <Typography 
                        key={item.id} 
                        sx={{
                            ...customTypography.sx,
                            color: item.color,
                        }} 
                        variant={customTypography.variant}
                    >
                        {renderTypingEffect(item, index)}
                    </Typography>
                ))
            ) : null }
        </div>
    );
};

export default ChatUI;
