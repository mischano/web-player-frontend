import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [globalMessage, setGlobalMessage] = useState('');
    const [globalFetchResult, setGlobalFetchResult] = useState('');
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
