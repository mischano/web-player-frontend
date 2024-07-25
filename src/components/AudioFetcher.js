import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useGlobal } from "../GlobalContext";

const AudioFetcher = ({ setLoading, setError, message }) => {
  const { setGlobalFetchResult } = useGlobal();

  useEffect(() => {
    if (message) {
      const audioFetcher = async () => {
        setLoading(true);
        setError(null);

        try {
          const fetchResult = await fetchAudio(message);
          setGlobalFetchResult(fetchResult);
        } catch (err) {
          setError(err.message);
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
    throw new Error('Invalid text parameter');
  }

  try {
    const response = await axios.get(`http://localhost:8000/api/search-audio-url/`, {
      params: { query: requestedAudio }
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching data:', err);  // Log the error for debugging
    throw new Error('Error fetching data');  // Throw the error to be caught in the component
  }
}

export default AudioFetcher;