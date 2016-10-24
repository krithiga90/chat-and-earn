var express = require('express');
var router = express.Router();

var todos = require('../models/todo');
/* GET home page. */
router.get('/', function(req, res, next) {
  todos.find(function(err, ads) {
			if (err)
				res.send(err);

			res.json(ads);
		});
});

module.exports = router;
