module.exports = (app) => {
  let UsuarioModel = app.models.usuario;

  let IndexController = {
    index: (req, res) => {
      res.render('index', { validacao: null });
    },

    login: (req, res) => {
      let login = req.body;

      UsuarioModel.login(login, (err, result) => {
        if(err) return res.render('index', { validacao: "Error ao fazer login!" });
        else {
          if(result.rows.length > 0) {
            req.session.usuario = result.rows[0];

            res.render('done');
          } else {
            return res.render('index', { validacao: "Login inexistente!" });
          }
        }
      });
    },

    sair: (req, res) => {
      req.session.destroy();
      res.redirect('/');
    }

  }

  return IndexController;
}
