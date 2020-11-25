const manageRoutes = require('./routes');

module.exports = {
  name: 'manage',
  version: '1.0.0',
  dependancies: ['store'],
  register: async (server, options) => {
    server.route([...manageRoutes]);
  },
};
