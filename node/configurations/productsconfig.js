const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'postgres',
  password: 'admin12345',
  port: 5432,
})


pool.connect((err) =>{
  if(err){
      console.log('didnt connect database ')
  }
  else{
      console.log('connected to database ')
  }

})

module.exports=pool;