const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'TG Motors API',
    description: 'API car services'
  },
  host: '',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);