const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const app = require('./app/app.js');

require('dotenv').config();

process.env.ENV = process.env.ENV || 'dev';

if (!process.env.PORT) {
  require('dotenv').config();
}

app.use(express.static(path.join(__dirname, '/dist')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

// app.listen(3000, () => {
//   console.log('LISTENING on Port 3000');
// });

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
