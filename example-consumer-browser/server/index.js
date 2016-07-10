
'use strict';

// core dependencies
const fs = require('fs');
const path = require('path');
// external dependencies
const open = require('open');
const express = require('express');
const http = require('http');

// config
const port = 3000;
const preferredBrowser = process.argv[2];

// init
const app = express();

// resources exposed to public
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../static')));

// start express
const httpsServer = http.createServer(app).listen(port, () => {
	console.info('Listening on port %d...', httpsServer.address().port)
  open('http://localhost:' + port + '/index-this.html', preferredBrowser);
	open('http://localhost:' + port + '/index-amd.html', preferredBrowser);
});
