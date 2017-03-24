var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:day', function(req, res, next) {
	res.send('The time is ' + new Date().toString() + 'day' + req.params.day);
});

module.exports = router;
