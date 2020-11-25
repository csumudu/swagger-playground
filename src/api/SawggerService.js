const { ApiEndpoints } = require('./endpoints');

export class SwaggerService {
  getAllFiles() {
    return fetch(ApiEndpoints.swagger.list, {
      method: 'get',
    }).then((response) => response.json());
  }
}
