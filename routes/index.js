var express = require('express');
var router = express.Router();
var users = require('../users.json')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/play', function(req, res) {
  res.render('play');
});


router.get('/users', function(req, res) {
  res.json(users);
});


router.get('/login', function(req, res) {
  res.send('login success');
});

router.post('/login', function(req, res) {
  const {username, password} = req.body;
  console.log(req.body);

  if(users.username === username && users.password === password){
      return res.send('Berhasil Login')
  }
      return res.send('username atau password tidak sesuai');
      res.json(users);
});





module.exports = router;
