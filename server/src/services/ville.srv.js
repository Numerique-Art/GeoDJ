const { getVilles, getVilleById } = require('../models/ville.model');

async function getAll(db){
  let client,data;

  try {

    client = await db.connect();
    
    data = await getVilles(client);

  } catch (err){

    return null;
  } finally {

    if(client)
      client.release();
  }

  if(data)
    return data.rows;
}

async function getById(db,id){

  let client,data;

  try {

    client = await db.connect();
    
    data = await getVilleById(id,client);

  } catch (err){

    return null;
  } finally {

    if(client)
      client.release();
  }

  if(data)
    return data.rows;
}

const Ville = { getAll, getById };

module.exports = { Ville };