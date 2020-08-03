const { getVillages, getVillageById } = require('../models/village.model');

async function getAll(db){

  let client;

  try {

    client = await db.connect();
    
    const data = await getVillages(client);

    if(data)
      return data.rows;

  } catch (err){

    return null;
  } finally {

    if(client)
      client.release();
  }
}

async function getById(db,id){

  let client;

  try {

    client = await db.connect();
    
    const data = await getVillageById(id,client);

    if(data)
      return data.rows;

  } catch (err){

    return null;
  } finally {

    if(client)
      client.release();
  }
}

const Village = { getAll, getById };

module.exports = { Village };