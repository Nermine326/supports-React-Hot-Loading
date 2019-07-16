
"use strict";

module.exports = function (req, res, next) {

  // User is allowed, proceed to controller
  if (req.isAuthenticated()) {
    return next();
  }
  // User is not allowed
  return res.redirect("/login");
};