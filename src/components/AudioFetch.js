import { useEffect } from "react";
import { useGlobal } from "../GlobalContext";
import axios from "axios";

const AudioFetch = () => {
    const { 
        globalUserMessage, setGlobalFetchResult, setGlobalErrorMessage, setIsLoading
    } = useGlobal();

    useEffect(() => {
        if (!globalUserMessage || globalUserMessage.length <= 0) {
            return;
        }

        const audioFetcher = async () => {
            setIsLoading(true);
            try {
                const fetchResult = await fetchAudio(globalUserMessage);
                if (fetchResult.error) {
                    setGlobalErrorMessage(fetchResult.error);
                } else {
                    setGlobalFetchResult(fetchResult); 
                }
            } catch (err) {
                console.log('Unexpected error in audioFetcher:', err);
                setGlobalErrorMessage('An unexpected error occured. I think you are cooked.');
            } 
            finally {
                setIsLoading(false);
            }
        }
        audioFetcher();

    }, [globalUserMessage]);
};

const fetchAudio = async (req) => {
    if (!req || typeof req !== 'string') {
        return { error: 'Invalid string parameter.' };
    }
    
    try {
        const response = await axios.get(`http://localhost:8000/api/search-audio-url/`, {
            params: { query: req },
            timeout: 10000 // 10 seconds wait time. 
        });

        return response.data;
    } catch (err) {
        if (err.response) {
            return { error: `${err.response.data.message}` || `Error: ${err.response.status} - ${err.response.statusText}` }
        }
        if (err.code === 'ENCONNABORTED') {
            return { error: 'Request timed out.' };
        }
        return { error: err.message || 'Failed to fetch the requested data.' }
    }
};

export default AudioFetch;
