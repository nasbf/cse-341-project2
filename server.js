const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use ('/', require('./routes'));

app.get('/', (req, res) => {
  res.send('This is my Project 2')
});


mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB with Mongoose');

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  })
  .catch((error) => {
    console.error('Connection error:', error);
  });