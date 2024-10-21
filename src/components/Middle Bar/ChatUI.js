import React, { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import '../../../static/css/middle.css';


const ChatUI =  ({
    newMessage, 
}) => {
    const [chat, setChat] = useState([]);
    const [isTyped, setIsTyped] = useState(false);

    useEffect(() => {
        if (newMessage && newMessage.length > 0) {
            setChat(prevChat => [
                ...prevChat,
                newMessage,
            ]);
            setIsTyped(false);
        } 
    }, [newMessage]);

    return (
        <div className="chat-box">
            {chat.map((item, index) => (
                    <div className="chat-box-inner" key={index}> 
                        <div className="custom-paper-upper">
                            {chat.length - 1 === index ? 
                                <p style={{ wordBreak: 'break-word', whiteSpace: 'normal', width: '100%' }}>
                                    <span style={{color: item[0].color}}>
                                        <ReactTyped strings={item[0].content} typeSpeed={10} backSpeed={5} loop={false} showCursor={false} />
                                    </span>&nbsp;
                                    <span style={{
                                        color: item[1].color, 
                                        }}>
                                        <ReactTyped strings={[item[1].content.join(' ')]} typeSpeed={10} backSpeed={5} loop={false} showCursor={false} />
                                    </span>
                                </p>
                                : 
                                <p style={{ wordBreak: 'break-word', whiteSpace: 'normal', width: '100%' }}>
                                    <span style={{color: item[0].color}}>
                                        {item[0].content}
                                    </span>&nbsp;
                                    <span style={{
                                        color: item[1].color, 
                                        }}>
                                        {item[1].content.join(' ')}
                                    </span>
                                </p>
                            }
                        </div>
                    </div>
            ))}   
        </div>
    );
};

export default ChatUI;
