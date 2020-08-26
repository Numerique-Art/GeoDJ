var mysql = require("mysql");

function createDbConnection(dbConfig) {
  var pool = mysql.createPool({
    connectionLimit: 20,
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.passwd,
    database: dbConfig.database,
  });

  try {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      // Use the connection
      connection.query("SELECT 1 + 1 AS solution", function (
        error,
        results,
        fields
      ) {
        // When done with the connection, release it.
        connection.release();

        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
      });
    });
    return pool;
  } catch (err) {
    return err;
  }
}

module.exports = createDbConnection;
