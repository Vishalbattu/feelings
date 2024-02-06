// server/index.js
const express = require('express');
const app = express();
const port = 3001; // You can use any port you prefer

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
