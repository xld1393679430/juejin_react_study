var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');

router.post('/', function (req, res, next) {
  let form = new multiparty.Form();
  form.parse(req, function (err, fields, file) {
    console.log(fields.data)
    res.send('接收成功');
  });
});

module.exports = router;
