const express = require('express');
const app = express();

app.use('/', require('./students'));

module.exports = app;