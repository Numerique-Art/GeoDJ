const env = require("dotenv").config();

if (env.error) {
  console.error(env.error);
}

module.exports = {
  port: parseInt(process.env.PORT, 10) || 3000,
  db: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "postgres",
    passwd: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "postgis_db",
    port: process.env.MYSQL_PORT || "5432",
  },
};
