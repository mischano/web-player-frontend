import React, { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import '../../../static/css/middle.css';


const ChatUI =  ({
    newMessage, 
}) => {
    const [chat, setChat] = useState([]);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        if (newMessage && newMessage.length > 0) {
            setChat(prevChat => [
                ...prevChat,
                newMessage,
            ]);
            setIsDone(false);
        } 
    }, [newMessage]);

    return (
        <div className="chat-box">
            {chat.map((item, index) => (
                <div className="chat-box-block" key={index}> 
                    {chat.length - 1 === index ? (
                        <p className="chat-paragraph">
                            <span className="chat-paragraph-header">
                                <ReactTyped 
                                    strings={item[0].content} 
                                    typeSpeed={10} backSpeed={5} 
                                    loop={false} 
                                    showCursor={false} 
                                    onComplete={() => {setIsDone(true)}}
                                />
                            </span>
                            &nbsp;
                            {isDone ? (
                                <span className="chat-paragraph-body">
                                    <ReactTyped 
                                        strings={[item[1].content.join(' ')]} 
                                        typeSpeed={10} 
                                        backSpeed={5} 
                                        loop={false} 
                                        showCursor={false} />
                                </span>
                            ) : null}
                        </p>
                    ) : (
                        <p className="chat-paragraph">
                            <span className="chat-paragraph-header">
                                {item[0].content}
                            </span>&nbsp;
                            <span className="chat-paragraph-body">
                                {item[1].content.join(' ')}
                            </span>
                        </p>
                    )}
                </div>
            ))}   
        </div>
    );
};

export default ChatUI;
