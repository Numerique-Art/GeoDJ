const { PlanningApiController } = require("../controllers");

const route = (dbConnection) => {
  const router = require("express").Router();
  const apictl = new PlanningApiController(dbConnection);

  router.get("/", apictl.index);
  router.get("/status", apictl.status);

  return router;
};

module.exports = route;
