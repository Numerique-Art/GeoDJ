const { Village, Ville } = require('../services');

class GeoDJApiController {
  
  constructor(dbConnection) {
    this.db = dbConnection;
  }

  index(req,res){

  let villes, villages;

  Village.getAll(this.db)
    .then(rows => {
      villages = rows
    })
    .catch(err => next(err));
  
  Ville.getAll(this.db)
    .then(rows => {
      villes = rows.slice();
    })
    .catch(err => console.error(err));

  res.status(200).json(villes);
  
  }

  

  status(req,res){
    res.sendStatus(200);
  }
}


module.exports = { GeoDJApiController };