import React, { useState } from 'react';
import TextInput from './TextInput';
// import fetchAudio from './FetchAudio';

const Home = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    if (text.trim().length === 0) {
      setText("The text cannot be empty!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchAudio(text); 
      setText(data); // Update the textarea with the fetched data
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <TextInput text={text} setText={setText} onEnter={handleFetch}/>
      {/*<button onClick={handleFetchDataClick}>Fetch Data</button> */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Home;
