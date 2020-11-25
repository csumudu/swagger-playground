const Glue = require('@hapi/glue');
const Manifest = require('./private/config/module-config.js');

const options = {
  relativeTo: __dirname + '/private/modules',
};

const startServer = async function () {
  try {
    const server = await Glue.compose(Manifest, options);

    server.route({
      method: 'GET',
      path: '/{param*}',
      config: {
        auth: false,
      },
      handler: {
        directory: {
          path: __dirname + '/public',
          listing: false,
          index: true,
        },
      },
    });

    server.ext('onPreResponse', (request, h) => {
      const response = request.response;
      if (response.isBoom && response.output.statusCode === 404) {
        return h.file(__dirname + '/public/index.html').code(200);
      }

      return h.continue;
    });

    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
