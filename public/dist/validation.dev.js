"use strict";

var _require = require("express-validator"),
    check = _require.check;

emailValidation = check("email").trim().isEmail().withMessage("input valid email").escape().normalizeEmail();
passwordValidation = check(["password", "passwordConfirmation"]).trim().notEmpty().matches("[A-Z]").withMessage("Atleast one uppercase letter required").matches("[0-9]").withMessage("Atleasr one number required").isLength({
  min: 6
}).withMessage("minimum six digit required");
passwordConfirmation = check("passwordConfirmation").custom(function (value, _ref) {
  var request = _ref.request;

  if (value !== request.body.password) {
    throw new Error("password didn't matched");
  } else return 1;
});
module["export"] = {
  emailValidation: emailValidation,
  passwordValidation: passwordValidation,
  passwordConfirmation: passwordConfirmation
};
//# sourceMappingURL=validation.dev.js.map
