const _ = require('lodash');
const { Village, Ville } = require('../services');

class GeoDJApiController {
  
  constructor(dbConnection) {
    this.db = dbConnection;
  }

  // arrow func for binding fix
  index = async (req,res) => {

    const villages = await Village.getAll(this.db);
    const villes = await Ville.getAll(this.db);

    if(villes && villages){
      const jsonData = {
        status: 200,
        message: _.concat(villes,villages)
      }

      res.status(200).json(jsonData);
    }
  }

  villages = async (req,res) => {

    const villages = await Village.getAll(this.db);

    if(villages){
      const jsonData = {
        status: 200,
        message: villages
      }

      res.status(200).json(jsonData);
    }
  }

  villes = async (req,res) => {

    const villes = await Ville.getAll(this.db);

    if(villes){
      const jsonData = {
        status: 200,
        message: villes
      }

      res.status(200).json(jsonData);
    }
  }

  villeById = async (req,res) => {

    const { id } = req.params;
    const ville = await Ville.getById(this.db,id);

    if(ville){
      const jsonData = {
        status: 200,
        message: ville
      }

      res.status(200).json(jsonData);
    }
  }

  villageById = async (req,res) => {

    const { id } = req.params;
    const village = await Village.getById(this.db,id);

    if(village){
      const jsonData = {
        status: 200,
        message: village
      }

      res.status(200).json(jsonData);
    }
  }

  status(req,res){
    res.sendStatus(200);
  }
}


module.exports = { GeoDJApiController };