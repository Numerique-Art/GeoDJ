const config = require('./configs');

const express = require('express');
const app = express();
const { homeRouter } = require('./routes');

app.use('/', homeRouter);

app.listen(config.port, () => {
    console.log(`Server is listening at ${config.port}`);
});
