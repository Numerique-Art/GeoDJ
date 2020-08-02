const { GeoDJApiController } = require('../controllers');

const route = (dbConnection) => {
  const router = require('express').Router();
  const ctl = new GeoDJApiController(dbConnection);

  router.all('*',(req,res,next) => {
    const logMsg = `A request has been made to "${req.originalUrl}"`;
    console.debug(logMsg);
    return next();
  });

  router
  .get('/',(req,res) => ctl.index(req,res))
  .get('/status',(req,res) => ctl.status(req,res));

  return router;
}



module.exports = route;
