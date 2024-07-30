import React, { useEffect, useState } from "react";
import { useGlobal } from "../GlobalContext";


const ChatBox = () => {
    const { globalMessage, globalFetchResult, globalErrorMessage } = useGlobal();
    const { setGlobalMessage, setGlobalFetchResult, setGlobalErrorMessage } = useGlobal();
    const [chat, setChat] = useState(globalMessage);

    useEffect(() => {
        const handleChange = (change) => {
            const message = stampTime(change);
            setChat(prevChat => prevChat ? prevChat + '\n\n' + message : message);
        }

        if (globalMessage && globalMessage.length > 0) {
            handleChange(globalMessage);
            setGlobalMessage('');
        }
        if (globalFetchResult && !globalFetchResult.error) {
            console.log(globalFetchResult.error);
            handleChange(globalFetchResult.title);
            setGlobalFetchResult('');
        }
        if (globalErrorMessage && globalErrorMessage.length > 0) {
            setGlobalErrorMessage('');
            handleChange(globalErrorMessage);
        }
    }, [globalMessage, globalFetchResult, globalErrorMessage])
    
    // const { globalMessage } = useGlobal();
    // const { globalFetchResult } = useGlobal();
    // const { globalErrorMessage } = useGlobal();
    // useEffect(() => {
    //     if (globalMessage.length == 0) {
    //         return;
    //     }
    //     const message = stampTime(globalMessage);
    //     setChat(prevChat => prevChat ? prevChat + '\n' + message : message);
    // }, [globalMessage]);

    // useEffect(() => {
    //     /** Create an edge case to handle 'error'! **/
    //     if (globalFetchResult.length == 0) {
    //         return;
    //     }
    //     const message = stampTime(globalFetchResult.title);
    //     setChat(prevChat => prevChat ? prevChat + '\n' + message : message);
    // }, [globalFetchResult]);

    // useEffect(() => {
    //     if (globalErrorMessage.length == 0) {
    //         return;
    //     }
    //     const message = stampTime(globalErrorMessage);
    //     setChat(prevChat => prevChat ? prevChat + '\n' + message : message);
    // }, [globalErrorMessage]);

    const stampTime = (message) => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        return `${timeString}: ${message}`;
    }

    return (
        <div>
        <textarea
            value={chat}
            rows="10"
            cols="40"
            readOnly
        />
        </div>
    );
}

export default ChatBox;
