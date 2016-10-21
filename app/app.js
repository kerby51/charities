const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const donationRouter = require('./routes/donationRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api/donations', donationRouter);

module.exports = app;




