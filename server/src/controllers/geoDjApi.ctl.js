const { Village } = require('../services/village.srv');

class GeoDJApiController {
  
  constructor(dbConnection) {
    this.db = dbConnection;
  }

  index(req,res){

    Village.getAll(this.db)
    .then(rows => res.status(200).json(rows))
    .catch(err => next(err));
    
    
  
  }

  status(req,res){
    res.sendStatus(200);
  }
}


module.exports = { GeoDJApiController };