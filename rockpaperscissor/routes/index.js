var express = require('express');
var router = express.Router();

//GET home page. 
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// Insert route handlers here
router.use('/api', require('./api'));

module.exports = router;