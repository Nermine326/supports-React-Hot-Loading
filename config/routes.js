

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'get /': 'PageController.index',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  // Authentication EndPoints
  'get /login': 'PageController.login',
  'get /signup': 'PageController.signup',
  'get /logout': 'AuthController.logout',
  'get /forgot': 'AuthController.forgotPassword',
  'post /forgot': 'AuthController.forgotPasswordSubmit',
  'get  /reset/:token': 'AuthController.resetPassword',
  'post /reset': 'AuthController.resetPasswordSubmit',
  'get /register': 'AuthController.register',
  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',

  'get /auth/:provider': 'AuthController.provider',
  'get /auth/:provider/callback': 'AuthController.callback',
};
