'use strict';

var express = require("express");

var router = express.Router();

var authMiddleware = function authMiddleware(req, res, next) {
  console.log("authenticiation is called");
  next();
};

router.use(authMiddleware);
router.get("/", function (req, resp) {
  console.log("i am inside root of this router-thing");
});
router.post("/item", function _callee(req, res, next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log("i am herer");
          console.log(req.body.data);
          _context.next = 5;
          return regeneratorRuntime.awrap(res.send(req.body.data));

        case 5:
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log("".concat(_context.t0, " error happened"));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
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
