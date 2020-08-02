
async function getVilles(pgClient){
  const q = 'SELECT id_, name1_, ST_asGeoJson(geom) as geojson FROM ville';
  
  const res = await pgClient.query(q);

  if(res)
    return res;
}

async function getVilleById(id,pgClient){
  const q = {
    text: 'SELECT gid, id_, name1_, ST_asGeoJson(geom) as geojson FROM ville WHERE gid = $1',
    values: [id],
  }
  
  const res = await pgClient.query(q);

  if(res)
    return res;
}


module.exports = { getVilles, getVilleById }