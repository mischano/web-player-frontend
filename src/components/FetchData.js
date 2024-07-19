import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/data/'); // Replace with your API endpoint
    return JSON.stringify(response.data, null, 2);
  } catch (err) {
    return 'Error fetching data';
  }
};

export default fetchData;
