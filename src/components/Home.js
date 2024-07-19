import React, { useState } from 'react';
import TextInput from './TextInput';
import fetchData from './FetchData';

const Home = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchDataClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchData(); // Call the fetchData function
      setText(data); // Update the textarea with the fetched data
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Welcome to React</h1>
      <TextInput text={text} setText={setText} />
      <button onClick={handleFetchDataClick}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Home;
