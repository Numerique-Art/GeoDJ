const config = require("./configs");
const dbConnection = require("./models/dbConnection");

const pool = dbConnection(config.db);

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

const { apiRouter } = require("./routes");

// Middlewares
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("combined"));

// Routers
app.use("/api", apiRouter(pool));

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// Error Handlers
app.use(function (err, req, res, next) {
  const code = err.status || 500;
  if (code === 404)
    res.status(code).json({
      message: `${req.method} cannot find ${req.originalUrl}`,
    });
  else
    res.status(code).json({
      message: err.message,
    });
});

// Starting the server ...
app.listen(config.port, () => {
  console.log(`Server is listening at ${config.port}`);
});
