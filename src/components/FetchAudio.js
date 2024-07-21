import axios from 'axios';

const fetchAudio = async (text) => {
  // const domainAddress = "http://localhost:8000/api/search-audio-url/?query=" + text;
  // const domain = `${"http://localhost:8000/api/search-audio-url/?query="} ${text}`; 
  try {
    const response = await axios.get(`${"http://localhost:8000/api/search-audio-url/?query="} ${text}`);
    return JSON.stringify(response.data, null, 2);
  } catch (err) {
    return 'Error fetching data';
  }
};

export default fetchAudio;
