const express = require('express');
const axios = require('axios');
const app = express();
const port = 8008;

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'Invalid Url' });
  }

  const numbers = new Set();

 
});

app.listen(port, () => {
  console.log(`Server listening on port ${PORT}`);
});
