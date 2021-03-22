"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../public/validation"),
    emailValidation = _require.emailValidation,
    passwordValidation = _require.passwordValidation,
    passwordConfirmation = _require.passwordConfirmation;

var _require2 = require("express-validator"),
    validationResult = _require2.validationResult;

var _require3 = require("../data"),
    users = _require3.users,
    cheese = _require3.cheese;

router.get("/", function (req, res) {
  res.status(200).send({
    message: "Health is good !!! "
  });
});
router.post("/register", function (req, res, next) {
  console.log(req.url);
});
router.post("/user", [emailValidation, passwordValidation, passwordConfirmation], function _callee(req, res, next) {
  var error;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            error = validationResult(req);

            if (!error.isEmpty()) {
              res.send(error.array());
            } else {
              res.status(200).send("sucessfully loggedin ".concat(req.body.data.email, " and password: ").concat(req.body.data.password));
            }
          } catch (err) {
            console.log("we have error ".concat(err));
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;
//# sourceMappingURL=apiRoute.dev.js.map
