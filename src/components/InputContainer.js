import React, { useState } from 'react';
import { useGlobal } from '../GlobalContext';

const InputContainer = () => {
    const [text, setText] = useState('');
    const { setSharedData } = useGlobal();

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {  
            setSharedData(text);         
        }
    };

    return (
        <div>
        <textarea
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Type the name of the song and the artist, and hit `Enter`."
            rows="4"
            cols="50"
        />
        </div>
    );
};

export default InputContainer;
