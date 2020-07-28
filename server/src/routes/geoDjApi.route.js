const { HomeController } = require('../controllers');
const router = require('express').Router();

const ctl = new HomeController();

router.all('*',(req,res,next) => {
  const logMsg = `A request has been made to "${req.originalUrl}"`;
  console.debug(logMsg);
  return next();
})

router
.get('/',(req,res) => ctl.index(req,res))
.get('/status',(req,res) => ctl.status(req,res));

module.exports = router;
