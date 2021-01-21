const express = require('express');
const routes = require('./routes/routes');
const morgan = require('morgan');
const cors = require('cors');
const server = require('./server');

const app = server.app;
// mieddlelware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// add routes to app
app.use('/api/', routes);
app.use('/', (req, res) => res.status(200).send('runing application'));
console.log('run index.js');
server.run;