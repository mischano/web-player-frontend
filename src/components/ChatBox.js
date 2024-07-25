import React, { useEffect, useState } from "react";
import { useGlobal } from "../GlobalContext";


const ChatBox = () => {
    const [chat, setChat] = useState(globalMessage);
    const { globalMessage } = useGlobal();
    const { globalFetchResult } = useGlobal();

    useEffect(() => {
        setChat(prevChat => prevChat ? prevChat + '\n' + globalMessage : globalMessage);
    }, [globalMessage]);

    useEffect(() => {
        setChat(prevChat => prevChat ? prevChat + '\n' + globalFetchResult.title : globalFetchResult.title);
    }, [globalFetchResult]);

    return (
        <div>
        <textarea
            value={chat}
            onChange={(event) => setChat(event.target.value)}
            rows="10"
            cols="40"
        />
        </div>
    );
}

export default ChatBox;
