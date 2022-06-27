var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { path: p } = req.query
  const realPath = path.resolve(__dirname, '../../', p)
  console.log(p, realPath, 22223)
  fs.readFile(realPath, 'utf8', function(err, dataStr) {
    if(err){
      return console.log('文件读取失败：' + err.message);
    }
   
    res.send(dataStr);
  })
});

module.exports = router;
