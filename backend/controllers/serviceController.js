const Service = require('../models/serviceModel')
const Organization = require('../models/organizationModel')
const  mongoose = require('mongoose')

// get all services
const getServices = async (req, res) => {
    try{
        const services = await Service.find({}).sort({createdAt: -1}).populate('organization_id')
        res.status(200).json(services)
    }catch( error ){
        console.error('Error getting all services', error);
        res.status(500).send('Internal Server Error');
    }
}

// get a single service by id
const getServiceById = async (req, res) => {
    try{
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Invalid id'})
        }

        const service = await Service.findById(id).populate('organization_id')

        if(!service){
            return res.status(404).json({error: 'Service not Found'})
        }
        res.status(200).json(service)
    }catch( error ){
        console.error('Error getting a service', error);
        res.status(500).send('Internal Server Error');
    }
}

// get a single service by name
const getServiceByName = async (req, res) => {
    const { name } = req.params
    try{
        const service = await Service.findOne({name}).populate('organization_id')

        if(!service){
            return res.status(404).json({error: 'Service not Found'})
        }
        res.status(200).json(service)
    }catch( error ){
        console.error('Error getting a service', error);
        res.status(500).send('Internal Server Error');
    }
}

// create a new service
const createService = async (req, res) => {
    const {name, duration, organization_name} = req.body
    let emptyFields = []

    if(!name){
        emptyFields.push('name')
    }
    if(!duration){
        emptyFields.push('duration')
    }
    // if(!organization_name){
    //     emptyFields.push('organization_name')
    // }
    console.log(emptyFields)
    if(emptyFields.length > 0){
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    try{
        let organization = await Organization.findOne({name: organization_name})
        if(!organization){
            organization = await Organization.findOne({name: "Unregistered Organization"})
        }
        const service = await Service.create({name, duration, organization_id: organization._id})
        res.status(200).json(service)
    }catch (error){
        console.error('Error creating a service', error);
        res.status(500).send('Internal Server Error');
    }
}

// delete a service by id
const deleteServiceById = async (req, res) => {
    const { id } = req.params

    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Invalid id'})
        }

        const service = await Service.findOneAndDelete({_id: id})

        if(!service){
            return res.status(404).json({error: 'Service not Found'})
        }

        res.status(200).json(service)
    }catch (error){
        console.error('Error deleting a service', error);
        res.status(500).send('Internal Server Error');
    }
}

// delete a service by name
const deleteServiceByName = async (req, res) => {
    const { name } = req.body

    try{
        const service = await Service.findOneAndDelete({ name })

        if(!service){
            return res.status(404).json({error: 'Service not Found'})
        }

        res.status(200).json(service)
    }catch (error){
        console.error('Error deleting a service', error);
        res.status(500).send('Internal Server Error');
    }
}

// update a service
const updateService = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid id'})
    }

    const {name, duration, organization_name} = req.body
    
    try{
        let emptyFields = []

        if(!name){
            emptyFields.push('name')
        }
        if(!duration){
            emptyFields.push('duration')
        }
        if(!organization_name){
            emptyFields.push('organization_name')
        }

        if(emptyFields.length > 0){
            return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
        }

        let organization = await Organization.findOne({name: organization_name})
        if(!organization){
            organization = await Organization.findOne({name: " "})
        }

        const service = await Service.findOneAndUpdate(
            {_id: id}, 
            {name, duration, organization_id: organization._id},
            { new: true }
        )

        if(!service){
            return res.status(404).json({error: 'Service not Found'})
        }

        res.status(200).json(service)
    }catch (error){
        console.error('Error updating a service', error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {
    getServices,
    getServiceById,
    getServiceByName,
    createService,
    deleteServiceById,
    deleteServiceByName,
    updateService
}