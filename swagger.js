const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'TG Motors API',
    description: 'API car services'
  },
  host: 'https://cse-341-project2-tvgh.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);