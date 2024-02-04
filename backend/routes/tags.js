const express = require('express')
const {
    getTags,
    getTagById,
    createTag,
    deleteTagById,
    deleteTagByName,
    updateTagById
} = require('../controllers/tagController')

const router = express.Router()


// GET all tags
router.get('/tags/', getTags)

// GET a single tag by id
router.get('/tags/:id',getTagById)

// POST a new tag
router.post('/tags/', createTag)

// DELETE a tag by id 
router.delete('/tags/:id', deleteTagById)

// DELETE a tag by name
router.delete('/tags/', deleteTagByName)

// UPDATE a tag by id
router.patch('/tags/:id', updateTagById)

module.exports = router