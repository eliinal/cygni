/**
 * /routes/index.js
 * @description: Index file for the application. 
 * All routes with "/" comes through here. 
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.use('/api', require('./api'));

module.exports = router;