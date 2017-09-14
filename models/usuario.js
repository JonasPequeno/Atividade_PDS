module.exports = (app) => {
  let conn = app.libs.connFactory();

  let UsuarioModel = {
    login: (login, callback) => {
      conn
        .then(client => {
          client.query(`
            select * from usuario where email = '${login.email}' and senha = '${login.senha}'
          `, callback);
        });
    }
  }

  return UsuarioModel;
}
