const tacheModel = require("../models/taches.model");
const { result } = require("lodash");

class TacheService {
  static getAll(pool, callback) {
    tacheModel.getAll(pool, (err, result) => {
      if (err || !result.length) return callback(err);
      callback(null, result);
    });
  }
}

module.exports = TacheService;
