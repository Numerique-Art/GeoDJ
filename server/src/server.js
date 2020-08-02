const config = require('./configs');
const { createDBConnection } = require('./models/dbConnection');

createDBConnection(config.db)
    .then(({client,pool}) => {
        const express = require('express');
        const helmet = require('helmet');
        const app = express();
        
        const { apiRouter } = require('./routes');
        // Models testing 
        const { getVillages, getVillageById } = require('./models/village.model');

        // getVillageById(1,client)
        // .then(res => {
        //     console.log(res.rows);
        //     client.release();
        // })
        // .catch(err => console.log(err));

        // Middlewares
        app.use(helmet());
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

        // Routers
        app.use('/api', apiRouter(pool));

        // End connection test to the database
        // client.release();

        // Starting the server ...
        app.listen(config.port, () => {
            console.log(`Server is listening at ${config.port}`);
        });

    })
    .catch((err) => {
        console.log(err);
        if(err.code)
            console.error(`Node error: ${err}`);
        else
            console.error(`Database error connection: ${err}`);
    });
