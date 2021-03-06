const axios = require('axios');
//for SSL redirect
const redirectSSL = require("redirect-ssl");

const express = require('express');
const { static } = express;
const path = require('path');

const app = express();

// SSL force redirect in production mode env
app.use(
  redirectSSL.create({
    enabled: process.env.NODE_ENV === "production",
  })
);

app.use('/dist', static(path.join(__dirname, '../dist')));
app.use('/public', static(path.join(__dirname, '../public')));
app.use('/font-awesome', express.static('node_modules/font-awesome-animation/css/'))
app.use(express.json())

app.use(require('./routes'));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, '../src/index.html')));

app.use((error, req, res, next) => res.status(500).send(`There was an error ${error}`))


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port http://localhost:${port}`));