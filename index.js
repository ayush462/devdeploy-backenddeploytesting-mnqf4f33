const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || '*', credentials: true }));
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});