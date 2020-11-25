'use strict';

var appConfig = {
  serverPort: process.env.cm_swagger_pg_server_port || '5000',
  apiBase: process.env.cm_swagger_pg_api_base || '',
};

module.exports = appConfig;
