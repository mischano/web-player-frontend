import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [sharedData, setSharedData] = useState('');

    return (
        <GlobalContext.Provider value={{ sharedData, setSharedData }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    return useContext(GlobalContext);
}