import React, { useEffect, useState, useRef } from "react";
import ChatBox from "./ChatBox";
import { useGlobal } from "../GlobalContext";
import { v4 as uuidv4 } from "uuid";
import { white, red, blue, green } from "./ChatBoxStyles";


const ChatBoxLogic = () => {
    const { globalMessage, setGlobalMessage } = useGlobal();
    const { globalErrorMessage, setGlobalErrorMessage } = useGlobal();
    const { globalFetchResult } = useGlobal();
    const [chat, setChat] = useState([]);
    const [oldChatSize, setOldChatSize] = useState(0);


    useEffect(() => {
        if (globalMessage && globalMessage.length > 0) {
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
            // const timeStamp = getTime();
            let cleanedMessage = `${globalFetchResult.title.replace(new RegExp('&', 'g'), 'and')}\n\n`;
            
            setOldChatSize(chat.length);
            setChat(prevChat => [
                ...prevChat,
                {id: uuidv4(), content: 'Added:', size: '14px', weight: 'bold', color: blue},
                {id: uuidv4(), content: cleanedMessage, size: '14px', weight: 'normal', color: white}
            ]);
        }
    }, [globalFetchResult]);

    /******************************  
    *Not included in the design yet. 
    ******************************/
    // const getTime = () => {
    //     const now = new Date();
    //     const timeString = now.toLocaleTimeString('en-US', {
    //         hour: '2-digit',
    //         minute: '2-digit',
    //         hour12: true
    //     });
    //     return timeString;
    // }
    
    return (
        <ChatBox
            chat={chat}
            oldChatSize={oldChatSize}
        />
    );

}

export default ChatBoxLogic;