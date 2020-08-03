'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = app => {
    app.use(cors({
        origin: '*',
        optionsSuccessStatus: 200
    }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
}