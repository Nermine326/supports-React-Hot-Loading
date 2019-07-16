

var ExpressState = require('express-state');

module.exports.bootstrap = function(cb) {

  // Setup Express State
  ExpressState.extend(sails.hooks.http.app);
  sails.hooks.http.app.set('state namespace', 'App');

  
  // Setup passport auth
  sails.services.passport.loadStrategies();

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
