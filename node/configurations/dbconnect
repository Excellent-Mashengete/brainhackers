const Pool = require('pg').Pool 

const pool = new Pool({
    connectionString : "postgres://ympykmurjelcra:d6eed9f2b3824037bd6a788f134469edeeab2a9841aa37e6d0ade21cd6c51801@ec2-52-71-23-11.compute-1.amazonaws.com:5432/d7p9sfof5l90fd",
    ssl: {
        rejectUnauthorized:false
    }
})

//check if the database is connected 

pool.connect((err) =>{
    if(err){
        console.log('didnt connect database ')
    }
    else{
        
        console.log('connected to database ')
    }

})