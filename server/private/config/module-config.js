'use strict';

const config = require('./application-config.js');

module.exports = {
  server: {
    port: config.serverPort,
  },
  register: {
    plugins: [
      {
        plugin: require('@hapi/inert'),
      },
      {
        plugin: require('@hapi/h2o2'),
      },
      {
        plugin: './manage',
      },
      {
        plugin: './store',
      },
    ],
  },
};
