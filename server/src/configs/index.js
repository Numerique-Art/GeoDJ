const env = require('dotenv').config();

if(env.error){
  console.error(env.error);
}

module.exports = {
  port: parseInt(process.env.PORT,10) || 3000,
  db: {
    host: process.env.PGHOST || 'localhost',
    user: process.env.PGUSER || 'postgres',
    passwd: process.env.PGPASSWORD || 'mohackzzz',
    database: process.env.PGDATABASE || 'postgis_db',
    port: process.env.PGPORT || '5432'
  }
};
