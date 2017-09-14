module.exports = app => {

  let IndexController = app.controllers.index;

  let auth = require('../libs/auth');

  app.get('/', IndexController.index);
  app.post('/login', IndexController.login);
  app.get('/sair', auth, IndexController.sair);
}
