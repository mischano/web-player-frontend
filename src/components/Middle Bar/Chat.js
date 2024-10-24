import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useGlobal } from "../../GlobalContext";
import ChatUI from "./ChatUI";
import { Repartition } from "@mui/icons-material";


const Chat = () => {
    const [chat, setChat] = useState([]);
    
    const { globalUserMessage, globalErrorMessage, globalFetchResult, setIsLoading } = useGlobal();

    const createChatMessage = (headerText, bodyContent, headerClass, bodyClass) => {
        return [
            {
                id: uuidv4(),
                className: headerClass,
                content: [headerText],
            },
            {
                id: uuidv4(),
                className: bodyClass,
                content: bodyContent.split(' '),
            }
        ];
    };
    
    // `&` character causes `ReactTyped` component in ChatBox.js to crash. 
    // Hence, `&` is replaced with the word `and` below. 
    const replaceAmpresand = (message) => {
        return message.replace(new RegExp('&', 'g'), 'and');        
    };

    useEffect(() => {
        if (globalUserMessage) {
            const cleanedMessage = replaceAmpresand(globalUserMessage);
            const message = createChatMessage('Requested:', cleanedMessage, 'chat-paragraph-header-requested');
            setChat(message);
        }
    },[globalUserMessage, setIsLoading]);
    
    useEffect(() => {
        let message; 
        if (globalFetchResult) {
            const cleanedMessage = replaceAmpresand(globalFetchResult.title);
            message = createChatMessage('Added:', cleanedMessage, 'chat-paragraph-header-added');
        } else if (globalErrorMessage) {
            const cleanedMessage = replaceAmpresand(globalErrorMessage);
            message = createChatMessage('Error:', cleanedMessage, 'chat-paragraph-header-error');
        }

        if (message) {
            setChat(message);
        }
    }, [globalErrorMessage, globalFetchResult, setIsLoading]);



    return (
        <ChatUI
            newMessage={chat}
        />
    );
};

export default Chat;