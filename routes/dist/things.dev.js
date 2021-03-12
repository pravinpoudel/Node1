'use strict';

var express = require("express");

var bcrypt = require("bcrypt");

var router = express.Router();
var saltRound = 13;

var authMiddleware = function authMiddleware(req, res, next) {
  console.log("authenticiation is called");
  next();
};

router.use(authMiddleware);
router.get("/", function (req, resp) {
  console.log("i am inside root of this router-thing");
});
router.post("/user", function (req, res, next) {
  res.send(req.body.data);
});
router.post("/register", function _callee(req, res, next) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log("i am herer");
          console.log(req.body.data);
          _context.t0 = Date.now();
          _context.t1 = req.body.data.name;
          _context.t2 = req.body.data.email;
          _context.next = 8;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.data.password, saltRound));

        case 8:
          _context.t3 = _context.sent;
          _context.t4 = req.body.data.age;
          _context.t5 = req.body.data.role;
          user = {
            _id: _context.t0,
            name: _context.t1,
            email: _context.t2,
            password: _context.t3,
            age: _context.t4,
            role: _context.t5
          };
          _context.next = 14;
          return regeneratorRuntime.awrap(res.status(201).send(user));

        case 14:
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t6 = _context["catch"](0);
          console.log("".concat(_context.t6, " error happened"));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 16]]);
});
router.post("/login", function _callee2(req, res, next) {
  var userMatched, _submittedPassword, savedPassword, passwordMatched, fakeHashedPassword;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          //check if that email exist otherwise there is no point of hashing submitted password
          userMatched = true;

          if (!userMatched) {
            _context2.next = 11;
            break;
          }

          _submittedPassword = req.body.data.password;
          _context2.next = 6;
          return regeneratorRuntime.awrap(bcrypt.hash('Pulchowk@123', saltRound));

        case 6:
          savedPassword = _context2.sent;
          passwordMatched = bcrypt.compare(_submittedPassword, savedPassword);

          if (passwordMatched) {
            console.log(" party !! do login");
            res.status(200).send({
              status: 200,
              message: "guest is our user"
            });
          } else {
            console.log("sorry we dont recognize you");
            res.status(401).send({
              status: 401,
              error: "Password didn't matched"
            });
          }

          _context2.next = 14;
          break;

        case 11:
          // fake pass
          fakeHashedPassword = "$2B$".concat(saltRound, "passwordisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          bcrypt.compare(submittedPassword, fakeHashedPassword);
          res.status(401).send({
            status: 401,
            error: "your credential doesnot match with ours"
          });

        case 14:
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](0);
          console.log("".concat(_context2.t0, " is catched"));

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 16]]);
});
router.route("/mouse").get(function (req, res) {
  console.log("get all mouse");
}).put(function (req, res) {
  console.log("add new mouse");
});
router.route("/mouse/:mouseid").get(function (req, res) {
  console.log("i demand the mouse with id ".concat(req.params.mouseid));
}).put(function (req, res) {
  return [console.log("i demand to update the mouse with id of ".concat(req.params.mouseid))];
});
module.exports = router;
//# sourceMappingURL=things.dev.js.map
