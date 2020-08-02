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

        app.use((req, res, next) => {
            const error = new Error("Not found");
            error.status = 404;
            next(error);
        });

        // Error Handlers
        app.use(function(err,req,res,next){
            const code = err.status || 500;
            res.status(code).json({
                status: code,
                message: req.method +' cannot find '+req.originalUrl
            })
        })

        // End connection test to the database
        client.release();

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
