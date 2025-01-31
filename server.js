const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/basic-info', (req, res) => {
  res.status(200).json({
  'email': 'preciousidubor@gmail.com',
  'current_datetime': `${new Date().toISOString()}`,
  'github_url': '<https://github.com/pd-idubor/HNG12>'
});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

