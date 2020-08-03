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
  .get(['/','/all'],(req,res,next) => wrapAsync(ctl.index,req,res,next))
  .get(['/village','/villages'],(req,res,next) => wrapAsync(ctl.villages,req,res,next))
  .get('/village/:id',(req,res,next) => wrapAsync(ctl.villageById,req,res,next))
  .get(['/ville','/villes'],(req,res,next) => wrapAsync(ctl.villes,req,res,next))
  .get('/ville/:id',(req,res,next) => wrapAsync(ctl.villeById,req,res,next))
  .get('/status',(req,res) => ctl.status(req,res));

  return router;
}

function wrapAsync(func,req,res,next){
  return func(req,res,next).catch((err) => next(err));
}



module.exports = route;
