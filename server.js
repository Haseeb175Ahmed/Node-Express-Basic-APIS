const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// var cors = require('cors')

// app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, function() {
    console.log('server is listening')
})

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes/index.js'))

// app.get('/test', (req, res) => {
//     res.send({message: "Worked"})
// })

// app.get('/getAllFriends', (req, res) => {
//     console.log('hello world')
//     res.send({users: [], message: 'successful'})
// })

// app.post('/addFriend', (req, res) => {
//     console.log('hello world')
//     res.send({message: 'friend added'})
// })
// app.get('/users/', function(req, res) {
//     var user_id = req.param('id');
//     var token = req.param('token');
//     var geo = req.param('geo');  
  
//     res.send(user_id + ' ' + token + ' ' + geo);
//   });

app.post('/update', function(req, res) {
    console.log(JSON.stringify(req.body, null, 4)); // the posted data
});

// http://localhost:3000/users/users1?id=14&token=abc&geo=Parameters,