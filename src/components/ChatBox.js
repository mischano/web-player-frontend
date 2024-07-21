import React, { useEffect, useState } from "react";
import { useGlobal } from "../GlobalContext";


const ChatBox = () => {
    const { sharedData } = useGlobal();
    const [chat, setChat] = useState(sharedData);

    useEffect(() => {
        setChat(sharedData);
    }, [sharedData]);

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
