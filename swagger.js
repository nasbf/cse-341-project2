const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'TG Motors API',
    description: 'API car services'
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);