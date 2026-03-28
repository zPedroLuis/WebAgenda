const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'WebAgenda API',
      version: '1.0.0',
      description: 'Documentação da API WebAgenda',
    },
    servers: [
      {
        url: 'http://localhost:2999',
      },
    ],
  },
  apis: ['./src/routes.ts'], // Pode adicionar mais arquivos depois
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
