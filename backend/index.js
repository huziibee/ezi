// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();
const portt = process.env.PORT || 3005;

// Serve static files from the 'public' folder
app.use(express.static(path.resolve(__dirname, './dist'), { maxAge : '1y', etag: false}));
app.use(history());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


// Handle requests that don't match any routes by serving the frontend index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen( portt, () => {
  console.log(`Example app listening on port ${ portt}`);
});