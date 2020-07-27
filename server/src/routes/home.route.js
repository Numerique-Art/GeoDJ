const { HomeController } = require('../controllers');
const router = require('express').Router();

const ctl = new HomeController();

router
.get('/',(req,res) => ctl.index(req,res))
.get('/status',(req,res) => ctl.status(req,res));

module.exports = router;
