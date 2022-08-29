var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require('path')
const axios = require("axios");

router.get("/", function (req, res, next) {
  const url = req.query.url;
  axios({
    method: "get",
    // url: 'http://cdnimg.acai365.com/uploads/202112/e927f254e20e4c2943.jpg',
    url,
    responseType: "stream",
  }).then(function (response) {
    const filePath = path.resolve(__dirname, '../download')
    const strem = response.data.pipe(fs.createWriteStream(`${filePath}/1.jpg`).on('close', error => {
      console.log(error, '错误')
    }));
    res.send(strem);
  });

  // axios({
  //   method: "get",
  //   url,
  //   responseType: "blob",
  // }).then(function (response) {
  //   res.send(response.data);
  // });
});

module.exports = router;
