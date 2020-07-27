const config = require('./configs');
const { createDBConnection } = require('./models/dbConnection');

createDBConnection(config.db)
    .then((client) => {
        const express = require('express');
        const { homeRouter } = require('./routes');
        const helmet = require('helmet');
        const app = express();

        // Middlewares
        app.use(helmet());
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

        // Routers
        app.use('/api', homeRouter);

        // Starting the server ...
        app.listen(config.port, () => {
            console.log(`Server is listening at ${config.port}`);
        });
    })
    .catch((err) => {
        console.error(`Database error connection : ${err}`);
    });
