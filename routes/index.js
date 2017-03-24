var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
		title: 'Express',
		items:[12, 33, 44, 55] 
	});
});

module.exports = router;
