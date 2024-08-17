import React, { useEffect, useState, useRef, memo } from "react";
import { Typography, Paper } from "@mui/material";
import { useGlobal } from "../GlobalContext";
import { styled } from "@mui/system";
import { v4 as uuidv4 } from "uuid";
import { ReactTyped as Typed } from "react-typed";
import './ChatBox.css';

const MemoizedChatItem = memo(({ chatItem }) => (
    <Typography
        variant="body1"
        key={chatItem.id}
        sx={{
            width: '90%',
            margin: '0 auto',
            marginLeft: '-3px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            padding: '2px',
            color: chatItem.color,
            lineHeight: 1.2,
            fontFamily: 'Fira Code, monospace',
            fontSize: '14px',
        }}
    >
        <Typed
            strings={[chatItem.text]}
            typeSpeed={100}
            backSpeed={50}
            loop={false}
        />
    </Typography>
));


const ChatBox = () => {
    const { globalMessage, setGlobalMessage } = useGlobal();
    const { globalErrorMessage, setGlobalErrorMessage } = useGlobal();
    const { globalFetchResult } = useGlobal();
    const [chat, setChat] = useState([]);

    const red ='#ef5350';
    const white ='#ffffffb6';

    const paperRef = useRef();
    
    useEffect(() => {
        const handleChange = (prompt, message, promptColor) => {
            setChat(prevChat => [
                    ...prevChat,
                    { id: uuidv4(), text: prompt, color: promptColor },
                    { id: uuidv4(), text: `${message}\n\n`, color: white }
                ]);
        };
        
        const time = getTime();
        
        if (globalMessage && globalMessage.length > 0) {
            handleChange(time, `$ ${globalMessage}`, red);
            setGlobalMessage('');
        }
    }, [globalMessage, globalFetchResult, globalErrorMessage])

    useEffect(() => {
        paperRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chat]);

    const CustomPaper = styled(Paper)({
         /* Customizing the scrollbar track */
        '::-webkit-scrollbar-track': {
            backgroundColor: '#000',
            borderRadius: '5px',
        },
  
        /* Customizing the scrollbar */
        '::-webkit-scrollbar': {
            width: '6px',  // Width of the scrollbar
            height: '6px', // Height of the scrollbar
        },
  
        /* Customizing the thumb (the part that can be dragged) */
        '::-webkit-scrollbar-thumb': {
            backgroundColor: '9e9e9e', // Color of the thumb
            borderRadius: '5px',
            border: '1px solid #ffffffb6', // Adds space around the thumb
        },
        
        /* Customizing the thumb on hover */
        '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#ffffffb6', // Darker color when hovered
        },
    });

    const getTime = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        return timeString;
    }

    return (
        <CustomPaper
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                top: '2%',
                left: '1%',
                width: '100%',
                height: '100%',
                maxWidth: '30vw',
                maxHeight: '85vh',
                backgroundColor: '#000',
                borderRadius: '20px',
                overflowY: 'auto',
                padding: '10px',
            }}   
        >
            {chat.map((chatItem, index) => (
                <Typography
                    variant="body1"
                    key={chatItem.id}
                    sx={{
                        width: '90%',
                        margin: '0 auto',
                        marginLeft: '-3px',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        padding: '2px',
                        color: chatItem.color,
                        lineHeight: 1.2,
                        fontFamily: 'Fira Code, monospace',
                        fontSize: '14px',
                    }}
                >
                    {index === chat.length - 1 ? (
                        <Typed
                            strings={[chatItem.text]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop={false}
                        />
                    ) : (
                        chatItem.text
                    )}
                </Typography>
            ))}
        </CustomPaper> 
    );
};

export default ChatBox;
 