var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");
var JSONStream = require("JSONStream");

router.get("/", function (req, res, next) {
  let result = null;
  const file = path.resolve(__dirname, "../../", "package.json");
  const readable = fs.createReadStream(file, {
    encoding: "utf8",
    highWaterMark: 10,
  });
  const parser = JSONStream.parse("dependencies");
  readable.pipe(parser);
  parser
    .on("data", function (e) {
      result = e;
    })
    .on("error", function (error) {
      res.send("error");
    })
    .on("end", function (...args) {
      res.send(result);
    });
});

module.exports = router;
