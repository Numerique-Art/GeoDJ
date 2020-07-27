const { Client } = require('pg');
const { db } = require('../configs');

function createDBConnection(dbConfig){
  return new Promise((resolve,reject) => {
    const client = new Client({
      user: dbConfig.user,
      host: dbConfig.host,
      database: dbConfig.database,
      password: dbConfig.passwd,
      port: dbConfig.port,
    });

    client.connect()
    .then(() => resolve(client))
    .catch(err => reject(err));
  })
  
}

module.exports = { createDBConnection };