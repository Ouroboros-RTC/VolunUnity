const Tag = require('../models/tagModel')
const  mongoose = require('mongoose')

// get all tags
const getTags = async (req, res) => {
    try{
        const tags = await Tag.find({}).sort({createdAt: -1})
        res.status(200).json(tags)
    }catch( error ){
        console.error('Error getting all tags', error);
        res.status(500).send('Internal Server Error');
    }
}

// get a single tag by Id
const getTagById = async (req, res) => {
    try{
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Invalid id'})
        }

        const tag = await Tag.findById(id)

        if(!tag){
            return res.status(404).json({error: 'Tag not Found'})
        }
        res.status(200).json(tag)
    }catch( error ){
        console.error('Error getting a tag', error);
        res.status(500).send('Internal Server Error');
    }
}

// create a new tag
const createTag = async (req, res) => {
    const { name } = req.body
    console.log("good")
    try{
        const tag = await Tag.create({name})
        console.log(tag)
        res.status(200).json(tag)
    }catch (error){
        console.error('Error creating a tag', error);
        res.status(500).send('Internal Server Error');
    }
}

// delete a tag by Id
const deleteTagById = async (req, res) => {
    const { id } = req.params

    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Invalid id'})
        }

        const tag = await Tag.findOneAndDelete({_id: id})

        if(!tag){
            return res.status(404).json({error: 'Tag not Found'})
        }

        res.status(200).json(tag)
    }catch (error){
        console.error('Error deleting a tag', error);
        res.status(500).send('Internal Server Error');
    }
}

// delete a tag by name
const deleteTagByName = async (req, res) => {
    const { name } = req.body

    try{
        const tag = await Tag.findOneAndDelete({name})

        if(!tag){
            return res.status(404).json({error: 'Tag not Found'})
        }

        res.status(200).json(tag)
    }catch (error){
        console.error('Error deleting a tag', error);
        res.status(500).send('Internal Server Error');
    }
}

// update a tag by id
const updateTagById = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid id'})
    }
    
    try{
        const tag = await Tag.findOneAndUpdate(
            {_id: id}, 
            {...req.body},
            { new: true }
        )

        if(!tag){
            return res.status(404).json({error: 'Tag not Found'})
        }

        res.status(200).json(tag)
    }catch (error){
        console.error('Error updating a tag', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getTags,
    getTagById,
    createTag,
    deleteTagById,
    deleteTagByName,
    updateTagById
}

