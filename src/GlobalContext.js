import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    // Message that the user enters. 
    const [globalMessage, setGlobalMessage] = useState('');
    // Result of fetched user message.
    const [globalFetchResult, setGlobalFetchResult] = useState('');
    // Contains more specific details about failed fetches. 
    const [globalErrorMessage, setGlobalErrorMessage] = useState('');

    return (
        <GlobalContext.Provider value=
        {{ 
            globalMessage, setGlobalMessage, 
            globalFetchResult, setGlobalFetchResult, 
            globalErrorMessage, setGlobalErrorMessage 
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    return useContext(GlobalContext);
}
