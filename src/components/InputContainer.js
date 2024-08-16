import React, { useCallback, useEffect, useState } from 'react';
import { useGlobal } from '../GlobalContext';
// import AudioFetcher from './AudioFetcher';
import "./InputContainer.css";


const InputContainer = () => {
    const [userInput, setUserInput] = useState('');
    const [message, setMessage] = useState('');
    const { setGlobalMessage } = useGlobal();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    //  * React state updates are sometimes optimized to ignore updates that don't actually change the state value. 
    //  * Ex: User entering the same input more than once. Since the state `message` is being set to the same value, 
    //  * re-render is not being triggered. To ensure re-mount and re-render are triggered even if the same data is 
    //  * entered, we use unique key that will help us to re-mount and re-render.  
    const [key, setKey] = useState(0);  

    useEffect(() => {
        if (loading) {
            setUserInput('Loading...');
        } else {
            setUserInput('');
        }
    }, [loading]);

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (userInput.trim().length > 0) {
                setMessage(userInput);
                setGlobalMessage(userInput);
            }
            setUserInput('');
            event.preventDefault();
            setKey(prevKey => prevKey + 1);
        }
    };
        // <div id='text-input'>
        //     <AudioFetcher setLoading={setLoading} setError={setError} key={key} message={message}/>
        //     {error && <p>Error: {error}</p>}
        // </div>

    return (
        <textarea 
            id="text-input"
            value={userInput} 
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Type the name of the song and the artist, and hit `Enter`."
            rows="4"
            cols="50"
            readOnly={loading}
        />
    );
};

export default InputContainer;
