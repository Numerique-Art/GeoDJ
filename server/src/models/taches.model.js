function getAll(pool, callbackfn) {
  const q = "SELECT * FROM tache";
  pool.query(q, (error, results, fields) => {
    if (error) return callbackfn(error);

    callbackfn(null, results);
  });
}

module.exports = {
  getAll,
};
