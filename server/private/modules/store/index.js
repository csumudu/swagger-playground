const DB = require('node-json-db');

module.exports = {
  name: 'store',
  version: '1.0.0',
  dependancies: [],
  register: async (server, options) => {
    const swaggerDb = new DB.JsonDB(
      __dirname + '/data/swagger.json',
      true,
      true,
    );

    server.expose('DB', swaggerDb);
  },
};
