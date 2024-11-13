import axios from 'axios';
import { JSDOM } from 'jsdom';

export const analyzeURL = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Fetch the page content
    const response = await axios.get(url);
    const dom = new JSDOM(response.data);
    const text = dom.window.document.body.textContent;

    // Clean and split text into words
    const words = text.toLowerCase().match(/\b\w+\b/g);
    // console.log(words);

    const frequency = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    // console.log(frequency);

    // Get the top 10 most frequent words
    const sortedWords = Object.entries(frequency)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);
    // console.log(sortedWords);

    res.json({ words: sortedWords });
  } catch (error) {
    console.log('error fetching the URL', error);
    res.status(500).json({ error: 'Failed to fetch or analyze the URL' });
  }
};
