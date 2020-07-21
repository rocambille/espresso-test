const express = require('express');
const app = express();

app.get('/', (req, res) =>{
  res.status(200).json('hello from express');
});

//const someRoutes = require('../routes/someRoutes');

module.exports = app;