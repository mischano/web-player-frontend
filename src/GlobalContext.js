import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    // User entered message.
    const [globalUserMessage, setGlobalUserMessage] = useState('');
    
    // Set to true if the fetch was successful; false otherwise.
    const [globalIsFetchSuccess, setGlobalIsFetchSuccess] = useState(false);
    // Fetch result content. 
    const [globalFetchResult, setGlobalFetchResult] = useState('');
    
    // Contains more specific details about failed fetches. 
    const [globalErrorMessage, setGlobalErrorMessage] = useState('');

    // Set to true when the fetching is in progress; false otherwise. 
    const [isLoading, setIsLoading] = useState(false);

    return (
        <GlobalContext.Provider value=
        {{
            globalUserMessage, setGlobalUserMessage, 
            globalIsFetchSuccess, setGlobalIsFetchSuccess, 
            globalFetchResult, setGlobalFetchResult,
            globalErrorMessage, setGlobalErrorMessage,
            isLoading, setIsLoading,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    return useContext(GlobalContext);
}
