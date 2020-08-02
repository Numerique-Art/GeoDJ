
async function getVillages(client){
  const q = 'SELECT id_, name1_, ST_asGeoJson(geom) as geojson FROM village';
  
  const res = await client.query(q);

  if(res)
    return res;
}

async function getVillageById(id,client){
  const q = {
    text: 'SELECT gid, id_, name1_, ST_asGeoJson(geom) as geojson FROM village WHERE gid = $1',
    values: [id],
  }
  
  const res = await client.query(q);

  if(res)
    return res;
}


module.exports = { getVillages, getVillageById }