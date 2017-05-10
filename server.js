'use strict';
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('./public'));
app.get('/new', (request, response) => response.sendFile('public/new.html', {root: '.'}));
app.get('/home', (request, response) => response.sendFile('public/home.html', {root: '.'}));
app.get('/*', (request, response) => response.sendFile('public/login.html', {root: '.'}));
app.listen(PORT, function(){
  console.log(`being hosted on ${PORT}`);
});
