module.exports =  app =>{
    const registerCont = require('../controllers/register_controller');


     app.post('/createUser',registerCont.createUser);
     
    
}