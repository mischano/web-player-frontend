import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useGlobal } from "../../GlobalContext";
import ChatUI from "./ChatUI";


const Chat = () => {
    const [chat, setChat] = useState([]);
    
    const {
        globalUserMessage, globalErrorMessage, globalFetchResult, globalIsFetchSuccess,
        setIsLoading, setGlobalErrorMessage,
    } = useGlobal();

    useEffect(() => {
        if (!globalUserMessage || globalUserMessage.length <= 0) {
            return;
        }
        
        let cleanedMessage = replaceAmpresandWithAnd(globalUserMessage).split(' ');
        const message = [
            {
                id: uuidv4(),
                className: 'chat-paragraph-header-requested',
                content: ['Requested:'],
            },
            {
                id: uuidv4(),
                className: 'chat-paragraph-body',
                content: cleanedMessage,
            }
        ];
        setIsLoading(true); 
        setChat(message);

    },[globalUserMessage]);
    
    useEffect(() => {
        let cleanedMessage, message;
        let content1, content2, class1, class2;
        if (globalIsFetchSuccess) {
            if (!globalFetchResult || globalFetchResult.length <= 0) {
                return;
            }
            cleanedMessage = replaceAmpresandWithAnd(globalFetchResult.title).split(' ');
            class1 = 'chat-paragraph-header-added'; content1 = ['Added:'];
            class2 = 'chat-paragraph-body'; content2 = cleanedMessage;
        } else {
            if (!globalErrorMessage || globalErrorMessage.length <= 0) {
                return;
            }
            cleanedMessage = replaceAmpresandWithAnd(globalErrorMessage).split(' ');
            class1 = 'chat-paragraph-header-added'; content1 = ['Added:'];
            class2 = 'chat-paragraph-body'; content2 = cleanedMessage;
        }
        message = [
            {
                id: uuidv4(),
                className: class1,
                content: content1,
            },
            {
                id: uuidv4(),
                className: class2,
                content: content2,
            }
        ]
        setChat(message)
        setIsLoading(false);

    }, [globalIsFetchSuccess]);

    // useEffect(() => {
    //     if (!globalFetchResult) {
    //         return;
    //     }

    //     let cleanedMessage = replaceAmpresandWithAnd(globalFetchResult.title).split(' ');
    //     const message = [
    //         {
    //             id: uuidv4(),
    //             class: 'chat-paragraph-header-added',
    //             content: ['Added:'],
    //         },
    //         {
    //             id: uuidv4(),
    //             class: 'chat-paragraph-body',
    //             content: cleanedMessage,
    //         }
    //     ];
    //     setIsLoading(false);
    //     setChat(message);

    // }, [globalFetchResult]);

    // useEffect(() => {
    //     if (!globalErrorMessage || globalErrorMessage.length <= 0) {
    //         return;
    //     }

    //     let cleanedMessage = replaceAmpresandWithAnd(globalErrorMessage).split(' ');
    //     const message = [
    //         {
    //             id: uuidv4(),
    //             content: ['Error:'],
    //             size: '14px',
    //             weight: 'bold',
    //             color: red,
    //         },
    //         {
    //             id: uuidv4(),
    //             content: cleanedMessage,
    //             size: '14px',
    //             weight: 'normal',
    //             color: blue,
    //         }
    //     ];
    //     setChat(message);
    //     setGlobalErrorMessage('');

    // }, [globalErrorMessage, setGlobalErrorMessage])

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