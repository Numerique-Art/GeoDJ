const { Client, Pool } = require('pg');
const { db } = require('../configs');

function createDBConnection(dbConfig){
  return new Promise((resolve,reject) => {
    const pool = new Pool({
      user: dbConfig.user,
      host: dbConfig.host,
      database: dbConfig.database,
      password: dbConfig.passwd,
      port: dbConfig.port,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });

    pool.connect()
    .then((client) => resolve({client, pool}))
    .catch(err => reject(err));
  })
  
}

module.exports = { createDBConnection };