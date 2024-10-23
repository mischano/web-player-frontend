import { useEffect } from "react";
import { useGlobal } from "../GlobalContext";
import axios from "axios";

const AudioFetch = () => {
    const { 
        globalUserMessage, setIsLoading, setGlobalUserMessage, setGlobalIsFetchSuccess, 
        setGlobalFetchResult, setGlobalErrorMessage 
    } = useGlobal();

    useEffect(() => {
        if (!globalUserMessage || globalUserMessage.length <= 0) {
            return;
        }

        const audioFetcher = async () => {
            try {
                const fetchResult = await fetchAudio(globalUserMessage);
                if (fetchResult.error) {
                    console.log('fetch.error');
                    setGlobalErrorMessage(fetchResult.error);
                    setGlobalIsFetchSuccess(false);
                } else {
                    console.log('else');
                    setGlobalIsFetchSuccess(true);
                    setGlobalFetchResult(fetchResult); 
                }
            } catch (err) {
                console.log('err');
                setGlobalErrorMessage('Error fetching audio');
                setGlobalIsFetchSuccess(false);
            } finally {
                console.log('finally');
                setGlobalUserMessage('');
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
            timeout: 30000
        });
        return response.data;
    } catch (err) {
        if (err.code === 'ECONNABORTED') {
            return { error: 'Request timed out.' };
        }
        return { error: 'Failed to fetch the requested data.' };
    }
}

export default AudioFetch;
