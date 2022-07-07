const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
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