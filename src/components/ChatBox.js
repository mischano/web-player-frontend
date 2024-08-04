import React, { useEffect, useState } from "react";
import { useGlobal } from "../GlobalContext";


const ChatBox = () => {
    const { globalMessage, setGlobalMessage } = useGlobal();
    const { globalErrorMessage, setGlobalErrorMessage } = useGlobal();
    const { globalFetchResult } = useGlobal();
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
            handleChange(globalFetchResult.title);
        }
        if (globalErrorMessage && globalErrorMessage.length > 0) {
            setGlobalErrorMessage('');
            handleChange(globalErrorMessage);
        }
    }, [globalMessage, globalFetchResult, globalErrorMessage])

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
