import React, { useEffect } from "react";
import axios from 'axios';
import { useGlobal } from "../GlobalContext";

const AudioFetcher = ({ setLoading, setError, message }) => {
  const { setGlobalFetchResult, setGlobalErrorMessage } = useGlobal();

  useEffect(() => {
    if (message) {
      const audioFetcher = async () => {
        setLoading(true);
        // setError(null);
        setGlobalErrorMessage('');

        try {
          const fetchResult = await fetchAudio(message);
          if (fetchResult.error) {
            setGlobalErrorMessage('Failed to fetch the requested audio.');
          } else {
            setGlobalFetchResult(fetchResult);
          }
        } catch (err) {
          // setError(err.message);
          setGlobalErrorMessage(err.message);
        } finally {
          setLoading(false);
        }
      };
      audioFetcher();
    }
  }, [message, setGlobalFetchResult, setLoading, setError]);

  return null;
}

const fetchAudio = async (requestedAudio) => {
  if (!requestedAudio || typeof requestedAudio != 'string') {
    setGlobalErrorMessage('Invalid text parameter');
    // throw new Error('Invalid text parameter');
  }

  try {
    const response = await axios.get(`http://localhost:8000/api/search-audio-url/`, {
      params: { query: requestedAudio }
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching data:', err);  
    setGlobalErrorMessage('Failed to fetch the requested data.');
    // throw new Error('Failed to fetch the requested data.');  
  }
}

export default AudioFetcher;
