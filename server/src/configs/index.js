const env = require('dotenv').config();

if(env.error){
  console.error(env.error);
}

module.exports = {
  port: parseInt(process.env.PORT,10) || 3000,
};
