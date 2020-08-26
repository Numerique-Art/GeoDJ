const _ = require("lodash");
const TacheService = require("../services/taches.srv");

class PlanningApiController {
  constructor(dbConnection) {
    this.db = dbConnection;
  }

  index = async (req, res, next) => {
    TacheService.getAll(this.db, (err, result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        next(err);
      }
    });
  };

  status(req, res) {
    res.sendStatus(200);
  }
}

module.exports = PlanningApiController;
