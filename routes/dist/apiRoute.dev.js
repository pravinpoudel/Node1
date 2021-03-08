"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../data"),
    users = _require.users,
    cheese = _require.cheese;

router.get("/", function (req, res) {
  res.status(200).send({
    message: "Health is good !!! "
  });
});
router.post("/register", function (req, res, next) {
  console.log(req.url); // add new user;
});
module.exports = router;
//# sourceMappingURL=apiRoute.dev.js.map
