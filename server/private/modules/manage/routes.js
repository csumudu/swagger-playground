const config = require('../../config/application-config');
const service = require('./services');

module.exports = [
  {
    method: 'GET',
    path: `${config.apiBase}/api/v1.0/swagger/files`,
    handler: service.getFooterLinks,
  },
  {
    method: 'POST',
    path: `${config.apiBase}/api/v1.0/swagger/file/upload`,
    handler: service.upload,
    options: {
      payload: {
        output: 'stream',
        parse: true,
        multipart: true,
      },
    },
  },
];
