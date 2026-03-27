const express = require('express');
const router = express.Router();
const servicesController = require ('../controllers/services');
const isAuthenticated = require('../middleware/autenticate');

router.get('/', 
  /*  #swagger.tags = ['Services']
      #swagger.description = 'Get all services'*/
      servicesController.getAll);


router.post('/',
    /* #swagger.tags = ['Services']
      #swagger.security = [{ "oauth": [] }]
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
      isAuthenticated, servicesController.createService);

router.put('/:id',
  /*  #swagger.tags = ['Services']
      #swagger.security = [{ "oauth": [] }]
      #swagger.description = 'Update a Service'
      #swagger.parameters['id'] = {
      in: 'path',
      description: 'Service Id',
      required: true,
      type: 'string'}
      
      #swagger.parameters['body'] = {
      in: 'body',
      description: 'Updated service data',
      required: true,
      schema: {
        service: "oil change",
        vehicleType: "car",
        category: "maintenance",
        technician: "Carlos",
        location: "Bogota",
        price: 120000,
        description: "Basic service"}
      }

      #swagger.responses[200] = {
      description: 'Service updated successfully',
      schema: {
         message: "Service updated succesfully",
         data: {
        _id: "69be117a9ce90d2b8b5769f8",
        service: "oil change",
        vehicleType: "car",
        category: "maintenance",
        technician: "Javier",
        location: "Bogota",
        price: 150000,
        description: "Updated service"}
      }
    }

    #swagger.responses[404] = {
      description: 'Service not found'
    }*/
      isAuthenticated, servicesController.updateService);


router.delete('/:id',
  /*  #swagger.tags = ['Services']
      #swagger.security = [{ "oauth": [] }]
      #swagger.description = 'Delete a Service'
      #swagger.parameters['id'] = {
      in: 'path',
      description: 'Service Id',
      required: true,
      type: 'string'}
      
    

      #swagger.responses[200] = {
      description: 'Service deleted successfully',
      schema: {
        message: 'Service deleted successfully',
        data: {
        _id: "69be117a9ce90d2b8b5769f8",
        }
      }
    }

    #swagger.responses[404] = {
      description: 'Service not found'
    }*/
      isAuthenticated, servicesController.deleteService);




module.exports = router;

