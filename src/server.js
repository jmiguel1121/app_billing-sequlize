const config = require('./config/env');
const express = require('express');

const app = express();
const port = config.app.port;


module.exports = {
    run: app.listen(port, () => console.log('run port ' + port)),
    app: app
};