const Service = require('../models/services');


const getAll = async (req, res) => {
    console.log('getting services ...')
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({
        message: 'Error retrieving services',
        error: error.message
        });
    }
};

const createService = async (req, res) => {
    
    try {
        const service = new Service(req.body);
        const data = await service.save();

        res.status(201).json({
            message: 'Service created succesfully',
            data: data});
    } catch (error) {
        res.status(400).json({
        message: 'Error creating service',
        error: error.message
    });
  }
};

const updateService = async (req, res) => {
    
    try {
        const update = await Service.findByIdAndUpdate(
            req.params.id, req.body, 
            {new: true});
        
        if (!update) {
            return res.status(404).json({ message: 'Service not found' });
        }
        //console.log(update);
        res.status(200).json({
            message: 'Service updated succesfully',
            data: update});

    } catch (error) {
        res.status(500).json({
        message: 'Error updating service',
        error: error.message
    });
  }
}

const deleteService = async (req, res) => {
    
    try {
        const deleteId = await Service.findByIdAndDelete(
            req.params.id, req.body, 
            {new: true});
        
        if (!deleteId) {
            return res.status(404).json({ message: 'Service not found' });
        }
        // console.log(deleteId);
        res.status(200).json({
            message: 'Service deleted saccesfully',
            data: deleteId});

    } catch (error) {
        res.status(500).json({
        message: 'Error updating service',
        error: error.message
    });
  }
}



module.exports = {
    getAll,
    createService,
    updateService,
    deleteService
};