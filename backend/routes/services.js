const express = require('express')
const {
    getServices,
    getServiceById,
    getServiceByName,
    createService,
    deleteServiceById,
    deleteServiceByName,
    updateService
} = require('../controllers/serviceController')

const router = express.Router()


// GET all services
router.get('/services/', getServices)

// GET a single service by id
router.get('/services/id/:id',getServiceById)

// GET a single service by name
router.get('/services/name/:name',getServiceByName)

// POST a new service
router.post('/services/', createService)

// DELETE a service by Id
router.delete('/services/:id', deleteServiceById)

// DELETE a service by name
router.delete('/services/', deleteServiceByName)

// UPDATE a service
router.patch('/services/:id', updateService)

module.exports = router