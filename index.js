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

  for (const url of urls) {
    try {
      const response = await axios.get(url, { timeout: 500 });
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        
        if (Array.isArray(data.numbers)) {
          data.numbers.forEach(number => numbers.add(number));
        }
      }
    } catch (error) {}
    
  }

  console.log(numbers);

  const mergedNumbers = Array.from(numbers).sort((a, b) => a - b);

  res.json({ numbers: mergedNumbers });

  

 
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
