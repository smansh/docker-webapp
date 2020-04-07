'use strict';

const express = require('express');

// Constants
const PORT = 8070;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Welocome to nodejs-docker-webapp\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
