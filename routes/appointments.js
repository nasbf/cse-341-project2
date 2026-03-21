const express = require('express');
const router = express.Router();
const appointmentsController = require ('../controllers/appointments');

router.get('/', 
  /*  #swagger.tags = ['Appointments']
      #swagger.description = 'Get all appointments'*/
      appointmentsController.getAll);


router.post('/',
    /* #swagger.tags = ['Appointments']
      #swagger.description = 'Create new appointment'
      #swagger.parameters['body'] = {
      in: 'body',
      description: 'Appointment data',
      required: true,
      schema: {
        firstName: "any",
        lastName: "any",
        email: "any@**.com",
        phone: "3225689875",
        date: "2026-05-10",
        }
        
      }*/
      appointmentsController.createAppointment);

router.put('/:id',
  /* #swagger.tags = ['Appointments']
      #swagger.description = 'Update an appointment'
      #swagger.parameters['id'] = {
      in: 'path',
      description: 'Appointment Id',
      required: true,
      type: 'string'}
      
      #swagger.parameters['body'] = {
      in: 'body',
      description: 'Updated appointment data',
      required: true,
      schema: {
        firstName: "any",
        lastName: "any",
        email: "any@**.com",
        phone: "3225689875",
        date: "2026-05-10",
        }
      }

      #swagger.responses[200] = {
      description: 'Appointment updated successfully',
      schema: {
         message: "Appointment updated succesfully",
         data: {
        _id: "69be117a9ce90d2b8b5769f8",
        firstName: "any",
        lastName: "any",
        email: "any@**.com",
        phone: "3225689875",
        date: "2026-05-10",
        }
      }
    }

    #swagger.responses[404] = {
      description: 'Appointment not found'
    }*/
      appointmentsController.updateAppointment);


router.delete('/:id',
  /* #swagger.tags = ['Appointments']
      #swagger.description = 'Delete an appointment'
      #swagger.parameters['id'] = {
      in: 'path',
      description: 'Service Id',
      required: true,
      type: 'string'}
      
    

      #swagger.responses[200] = {
      description: 'Appointment deleted successfully',
      schema: {
        message: 'Appointment deleted successfully',
        data: {
        _id: "69be117a9ce90d2b8b5769f8",
        }
      }
    }

    #swagger.responses[404] = {
      description: 'Appointment not found'
    }*/
      appointmentsController.deleteAppointment);




module.exports = router;

