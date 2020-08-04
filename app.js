'use strict';

const express = require('express');
const dotenv = require('dotenv').config();

require('./src/config/mongoose');
const app = express();
require('./src/config/express')(app);

require('./src/routes/ingredient')(app);
require('./src/routes/recipe')(app);
require('./src/routes/index')(app);

app.listen(process.env.PORT, function () {
    console.log(`🚀 Server ready at port: ${process.env.PORT}`);
});