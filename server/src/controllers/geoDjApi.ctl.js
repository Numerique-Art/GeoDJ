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

      res.status(jsonData.status).json(jsonData);
    }
  }

  villages = async (req,res) => {

    const villages = await Village.getAll(this.db);

    if(villages){
      const jsonData = {
        status: 200,
        message: villages
      }

      res.status(jsonData.status).json(jsonData);
    }
  }

  villes = async (req,res) => {

    const villes = await Ville.getAll(this.db);

    if(villes){
      const jsonData = {
        status: 200,
        message: villes
      }

      res.status(jsonData.status).json(jsonData);
    }
  }

  villeById = async (req,res) => {
    let { id } = req.params;
    id = Number(id);

    if(_.isNaN(id)){
      throw new Error('id must be an integer');
    }

    const ville = await Ville.getById(this.db,id);

    if(!_.isEmpty(ville)){
      const jsonData = {
        status: 200,
        message: ville
      }

      res.status(jsonData.status).json(jsonData);
    } else {
      res.status(404).json({
        status: 404,
        message: `Ville with id ${id} not found in the database`
      })
    }
  }

  villageById = async (req,res) => {

    let { id } = req.params;
    id = Number(id);

    if(_.isNaN(id)){
      throw new Error('id must be an integer');
    }

    const village = await Village.getById(this.db,id);

    if(!_.isEmpty(village)){
      const jsonData = {
        status: 200,
        message: village
      }

      res.status(jsonData.status).json(jsonData);
    } else {
      res.status(404).json({
        status: 404,
        message: `Village with id ${id} not found in the database`
      });
    }
  }

  status(req,res){
    res.sendStatus(200);
  }
}


module.exports = { GeoDJApiController };