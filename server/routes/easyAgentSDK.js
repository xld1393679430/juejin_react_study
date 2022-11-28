var express = require('express');
var router = express.Router();
var fs = require('fs')

router.get('/', function(req, res, next) {
  console.log(req.query)
  res.send("hello");
});

module.exports = router;
