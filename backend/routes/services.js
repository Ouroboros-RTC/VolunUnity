const express = require('express')
const {
    getServices,
    getService,
    createService,
    deleteService,
    updateService
} = require('../controllers/serviceController')

const router = express.Router()


// GET all services
router.get('/services/', getServices)

// GET a single service
router.get('/services/:id',getService)

// POST a new service
router.post('/services/', createService)

// DELETE a service
router.delete('/services/:id', deleteService)

// UPDATE a service
router.patch('/services/:id', updateService)

module.exports = router