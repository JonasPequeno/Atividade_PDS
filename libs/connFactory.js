const pg = require('pg');
const connString = 'postgres://postgres@localhost:5432/UserLogin';

function connFactory() {
  return pg.connect(connString);
}

module.exports = () => {
  return connFactory;
}
