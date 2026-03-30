const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('ROOT HIT 🔥');
  res.send('Hello DevOps 🚀');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App running on port ${PORT}`);
  console.log("SERVER STARTED 🔥");
});