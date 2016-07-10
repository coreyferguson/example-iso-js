
'use strict';

// core dependencies
const fs = require('fs');
const path = require('path');
// external dependencies
const open = require('open');
const express = require('express');
const https = require('https');

// config
const port = 3000;
const preferredBrowser = process.argv[2];

// init
const app = express();

// resources exposed to public
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../static')));

// start express
const options = {
	key: fs.readFileSync(path.join(__dirname, 'privatekey.pem')),
	cert: fs.readFileSync(path.join(__dirname, 'certificate.pem'))
};
const httpsServer = https.createServer(options, app).listen(port, () => {
	console.info('Listening on port %d...', httpsServer.address().port)
  open('https://localhost:' + port + '/index-this.html', preferredBrowser);
	open('https://localhost:' + port + '/index-amd.html', preferredBrowser);
});
