
const express = require('express');
const app = express();
app.use(express.json());

app.get('/balance', (req, res) => {
  res.json({ address: '0x123...', balance: '1.23 ETH' });
});

app.listen(3000, () => {
  console.log('Backend server running on port 3000');
});
