var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')

router.get('/', function(req, res, next) {
  const { path: p } = req.query
  const realPath = path.resolve(__dirname, '../../', p)
  fs.readFile(realPath, 'utf8', function(err, dataStr) {
    if(err){
       return;
    }
    res.send(dataStr);
  })
});

module.exports = router;
