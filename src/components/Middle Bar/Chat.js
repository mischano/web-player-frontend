import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useGlobal } from "../../GlobalContext";
import ChatUI from "./ChatUI";

const red ='#ef5350';
const white ='#ffffffb6';
const green = '#26a69a';
const blue = '#29b6f6';

const Chat = () => {
    const { globalMessage, setGlobalMessage } = useGlobal();
    const {globalErrorMessage, setGlobalErrorMessage } = useGlobal();
    const { globalFetchResult } = useGlobal();
    const [chat, setChat] = useState([]);

    useEffect(() => {
        if (globalMessage && globalMessage.length > 0) {
            let cleanedMessage = replaceAmpresandWithAnd(globalMessage).split(' ');
            
            const message = [
                {
                    id: uuidv4(),
                    content: ['Requested:'],
                    size: '14px',
                    weight: 'bold',
                    color: red,
                },
                {
                    id: uuidv4(),
                    content: cleanedMessage,
                    size: '14px',
                    weight: 'normal',
                    color: blue,
                }
            ];
            
            setChat(message);
            setGlobalMessage('');
        }
    },[globalMessage, setGlobalMessage]);

    // useEffect(() => {
    //     if (globalFetchResult && !globalFetchResult.error) {
    //         let cleanedMessage = `${replaceAmpresandWithAnd(globalFetchResult.title)}\n\n`;
            

    //         addToChat('Added', 'bold', blue);
    //         addToChat(cleanedMessage, 'normal', white);
    //     }
    // }, [globalFetchResult]);
    
    // const addToChat = (message) => {
    //     setChat(prevChat => [
    //         ...prevChat,
    //         message,
    //     ]);
    // };

    // const addToChat = (mesage, fontWeight, fontColor) => {
    //     setChat(prevChat => [
    //         ...prevChat,
    //         {id: uuidv4(), content: mesage, size: '14px', weight: fontWeight, color: fontColor},
    //     ]);
    // };

    // `&` character causes `ReactTyped` component in ChatBox.js to crash. 
    // Hence, `&` is replaced with the word `and` below. 
    const replaceAmpresandWithAnd = (message) => {
        return message.replace(new RegExp('&', 'g'), 'and');        
    };

    return (
        <ChatUI
            newMessage={chat}
        />
    );
};

export default Chat;