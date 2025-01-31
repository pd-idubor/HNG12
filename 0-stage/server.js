const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello HNG');
});

app.get('/api/basic-info', (req, res) => {
  const date = new Date();
  res.status(200).json({
  'email': 'preciousidubor@gmail.com',
  'current_datetime': `${date.toISOString()}`,
  'github_url': '<https://github.com/pd-idubor/HNG12/tree/master/0-stage>'
});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

