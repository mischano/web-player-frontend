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

    // Below hook allows the `ReactTyped` component to apply 'typing effect' only
    // to the latest message typed.
    // Ex: If `oldChatSize` size is different from `chat`, new message was added to chat.
    const [oldChatSize, setOldChatSize] = useState(0);

    useEffect(() => {
        if (globalMessage && globalMessage.length > 0) {
            let cleanedMessage = replaceAmpresandWithAnd(globalMessage).split(' ');
            // let words = cleanedMessage.split(' '); 
            
            setOldChatSize(chat.length);
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
            // addToChat(message);
            
            // addToChat('Requested', 'bold',red);
            // addToChat(cleanedMessage,'normal',blue);

            setGlobalMessage('');
        }
    },[globalMessage, setGlobalMessage]);

    useEffect(() => {
        if (globalFetchResult && !globalFetchResult.error) {
            let cleanedMessage = `${replaceAmpresandWithAnd(globalFetchResult.title)}\n\n`;
            
            setOldChatSize(chat.length);

            addToChat('Added', 'bold', blue);
            addToChat(cleanedMessage, 'normal', white);
        }
    }, [globalFetchResult]);
    
    const addToChat = (message) => {
        setChat(prevChat => [
            ...prevChat,
            message,
        ]);
    };

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
            oldChatSize={oldChatSize}
        />
    );
};

export default Chat;