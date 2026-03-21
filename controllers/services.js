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

        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({
        message: 'Error creating service',
        error: error.message
    });
  }
};

module.exports = {
    getAll,
    createService
};