const express = require('express');
const router = express.Router();
const servicesController = require ('../controllers/services');

router.get('/', 
  /*  #swagger.tags = ['Services']
      #swagger.description = 'Get all services'*/
      servicesController.getAll);


module.exports = router;


router.post('/',
    /* #swagger.tags = ['Services']
      #swagger.description = 'Create a Service'
      #swagger.parameters['body'] = {
      in: 'body',
      description: 'Service data',
      required: true,
      schema: {
        service: "oil change",
        vehicleType: "car",
        category: "maintenance",
        technician: "Carlos",
        location: "Bogota",
        price: 120000,
        description: "Basic service"
        }
      }*/
      servicesController.createService);


