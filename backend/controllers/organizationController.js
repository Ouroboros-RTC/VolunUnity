const Organization = require('../models/organizationModel')
const  mongoose = require('mongoose')

// get all organizations
const getOrganizations = async (req, res) => {
    try{
        const organizations = await Organization.find({}).sort({createdAt: -1})
        res.status(200).json(organizations)
    }catch( error ){
        console.error('Error getting all organizations', error);
        res.status(500).send('Internal Server Error');
    }
}

// get a single organization
const getOrganization = async (req, res) => {
    try{
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Invalid id'})
        }

        const organization = await Organization.findById(id)

        if(!organization){
            return res.status(404).json({error: 'Organization not Found'})
        }
        res.status(200).json(organization)
    }catch( error ){
        console.error('Error getting a organization', error);
        res.status(500).send('Internal Server Error');
    }
}

// create a new organization
const createOrganization = async (req, res) => {

    try{
        const organization = await Organization.create({...req.body})
        res.status(200).json(organization)
    }catch (error){
        console.error('Error creating a organization', error);
        res.status(500).send('Internal Server Error');
    }
}

// delete a organization
const deleteOrganization = async (req, res) => {
    const { id } = req.params

    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Invalid id'})
        }

        const organization = await Organization.findOneAndDelete({_id: id})

        if(!organization){
            return res.status(404).json({error: 'No such organization'})
        }

        res.status(200).json(organization)
    }catch (error){
        console.error('Error deleting a organization', error);
        res.status(500).send('Internal Server Error');
    }
}


// update a organization
const updateOrganization = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid id'})
    }
    
    try{
        const organization = await Organization.findOneAndUpdate(
            {_id: id}, 
            {...req.body},
            { new: true }
        )

        if(!organization){
            return res.status(404).json({error: 'Organization not Found'})
        }

        res.status(200).json(organization)
    }catch (error){
        console.error('Error updating a organization', error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {
    getOrganizations,
    getOrganization,    
    createOrganization,
    deleteOrganization,
    updateOrganization
}