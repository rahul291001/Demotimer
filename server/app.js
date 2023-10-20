const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let cursorActiveTime = 0; 

app.post('/time', (req, res) => {
  const { time } = req.body;
  cursorActiveTime = time; 
  res.sendStatus(200); 
});


app.get('/api/get-cursor-activity', (req, res) => {
  res.json({ cursorActiveTime });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
