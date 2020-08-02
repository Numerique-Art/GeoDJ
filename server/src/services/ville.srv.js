const { getVilles, getVilleById } = require('../models/ville.model');

async function getAll(db){

  try {

    const client = await db.connect();
    
    const data = await getVilles(client);

    if(data)
      return data.rows;

  } catch (err){

    return null;
  } finally {

    client.release();
  }
}

async function getById(db,id){

  try {

    const client = await db.connect();
    
    const data = await getVilleById(id,client);

    if(data)
      return data.rows;

  } catch (err){

    return null;
  } finally {

    client.release();
  }
}

const Ville = { getAll, getById };

module.exports = { Ville };