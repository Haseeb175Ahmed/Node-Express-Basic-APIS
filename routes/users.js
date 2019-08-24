const express = require('express');
const bodyParser= require('body-parser')
const router = express.Router();
const app = express();


app.get('/getAll1', function(req, res) {
    var user_id = req.param('id');
    var token = req.param('token');
    var geo = req.param('geo');  
  
    res.send(user_id + ' ' + token + ' ' + geo);
  });

router.get('/getAll', (req, res) => {
    res.send({users: [], message: "UnSuccessful"})
    var user_id = req.param('id');
    var token = req.param('token');
    var geo = req.param('geo');  

  res.send(user_id + ' ' + token + ' ' + geo);

})


router.post('/create',function(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.end("yes");
  });
  
  router.get('/Parameters/', function(req, res) {
    var user_id = req.param('id');
    var token = req.param('token');
    var geo = req.param('geo');  
  
    res.send(user_id + ' ' + token + ' ' + geo);
    res.send(req.body);
  });
  


module.exports = router;