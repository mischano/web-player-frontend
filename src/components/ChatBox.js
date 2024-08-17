import React, { useEffect, useState, useRef, memo } from "react";
import { Typography, Paper } from "@mui/material";
import { useGlobal } from "../GlobalContext";
import { styled } from "@mui/system";
import { v4 as uuidv4 } from "uuid";
import { ReactTyped } from "react-typed";
import './ChatBox.css';


const ChatBox = () => {
    const { globalMessage, setGlobalMessage } = useGlobal();
    const { globalErrorMessage, setGlobalErrorMessage } = useGlobal();
    const { globalFetchResult } = useGlobal();
    const [chat, setChat] = useState([]);
    const [oldChatSize, setOldChatSize] = useState(0);

    const paperRef = useRef();
    
    let red ='#ef5350';
    let white ='#ffffffb6';
    let green = '#26a69a';
    let blue = '#29b6f6';

    // useEffect(() => {
    //     let red ='#ef5350';
    //     let white ='#ffffffb6';

    //     const handleChange = (message) => {
    //         const timeStamp = getTime();
    //         console.log(message);
    //         setChat(prevChat => [
    //                 ...prevChat,
    //                 { id: uuidv4(), content: timeStamp, color: red },
    //                 { id: uuidv4(), content: message, color: white }
    //             ]);
    //         chat.map((item, index) => (
    //             console.log(`${index}: ${item.content}\n`)
    //         ))
    //     };
        
        
    //     if (globalMessage && globalMessage.length > 0) {
    //         // console.log(`message: ${globalMessage}`);
    //         handleChange(`$ ${globalMessage}\n\n`);
    //         setGlobalMessage('');
    //     }
    //     if (globalFetchResult && !globalFetchResult.error) {
    //         // console.log(`fetch: ${globalFetchResult.title}`);
    //         handleChange(`$ Added: ${globalFetchResult.title}`)
    //     }
    // }, [globalMessage, globalFetchResult, globalErrorMessage, setGlobalMessage])
    // useEffect(() => {
        // setChatSize(chat.length);
        // console.log(chat.length);
        // chat.map((item, idx) => (
        //     console.log(`${idx}: ${item.content}\n`)
        // ))
        // console.log('------------------');
    // }, [chat]);


    useEffect(() => {
        if (globalMessage && globalMessage.length > 0) {
            let timeStamp = getTime();
            let cleanedMessage = globalMessage.replace(new RegExp('&', 'g'), 'and');

            setOldChatSize(chat.length);
            setChat(prevChat => [
                ...prevChat, 
                {id: uuidv4(), content: 'Requested:', size: '14px', weight: 'bold', color: green},
                {id: uuidv4(), content: cleanedMessage, size: '14px', weight: 'normal', color: white}
            ]);
            setGlobalMessage('');
        }

    }, [globalMessage, setGlobalMessage]);

    useEffect(() => {
        if (globalFetchResult && !globalFetchResult.error) {
            const timeStamp = getTime();
            let cleanedMessage = `${globalFetchResult.title.replace(new RegExp('&', 'g'), 'and')}\n\n`;
            
            setOldChatSize(chat.length);
            setChat(prevChat => [
                ...prevChat,
                {id: uuidv4(), content: 'Added:', size: '14px', weight: 'bold', color: blue},
                {id: uuidv4(), content: cleanedMessage, size: '14px', weight: 'normal', color: white}
            ]);
        }
    }, [globalFetchResult]);

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
            {chat.length > oldChatSize ? (
                chat.map((chatItem, index) => (
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
                            fontSize: chatItem.size,
                            fontWeight: chatItem.weight,
                            overflowY: 'auto',
                        }}
                    >
                        {index === chat.length - 1 ? (
                            <ReactTyped
                                key={chatItem.id}
                                strings={[chatItem.content]}
                                typeSpeed={5}
                                backSpeed={5}
                                loop={false}
                            />
                        ) : (
                            chatItem.content
                        )}
                    </Typography>
                ))
            ) : null }
        </CustomPaper> 
    );
};

export default ChatBox;
 