const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = 3001; // Set the desired port for your proxy server

app.use(cors());

app.get('/api/searchitems', async (req, res) => {
  const { keywords, searchIndex } = req.query;
  const encodedKeywords = encodeURIComponent(keywords);
  const url = `https://webservices.amazon.com/paapi5/searchitems?Keywords=${encodedKeywords}&SearchIndex=${searchIndex}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch book data' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});