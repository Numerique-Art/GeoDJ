class HomeController {
  
  index(req,res){
    res.status(200).send('Hi from HomeController !');
  
  }

  status(req,res){
    res.sendStatus(200);
  }
}


module.exports = {HomeController};