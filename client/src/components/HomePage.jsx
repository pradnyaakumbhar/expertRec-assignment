import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import WordFrequencyTable from './WordFrequencyTable';

const HomePage = () => {
  const [url, setUrl] = useState('');
  const [wordData, setWordData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setWordData([]);

    try {
      const response = await axios.post(
        'http://localhost:7000/api/analyze-url',
        {
          url,
        }
      );
      setWordData(response.data.words);
      toast.success('Word analysis completed successfully!');
    } catch (err) {
      console.error('Error:', err);
      toast.error('Failed to fetch word data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-3xl font-bold mb-4">Word Frequency Analyzer</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="url"
          placeholder="Enter a URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-2 border rounded w-full mb-4"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Analyze
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {wordData.length > 0 && <WordFrequencyTable words={wordData} />}
    </div>
  );
};

export default HomePage;
