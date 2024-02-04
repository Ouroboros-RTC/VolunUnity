const express = require('express')
const {
    getOrganizations,
    getOrganizationById,
    getOrganizationByName,
    createOrganization,
    deleteOrganizationById,
    deleteOrganizationByName,
    updateOrganization
} = require('../controllers/organizationController')

const router = express.Router()


// GET all organizations
router.get('/organizations/', getOrganizations)

// GET a single organization by id
router.get('/organizations/id/:id',getOrganizationById)

// GET a single organization by name
router.get('/organizations/name/:name',getOrganizationByName)

// POST a new organization
router.post('/organizations/', createOrganization)

// DELETE a organization by id 
router.delete('/organizations/:id', deleteOrganizationById)

// DELETE a organization by name
router.delete('/organizations/', deleteOrganizationByName)

// UPDATE a organization
router.patch('/organizations/:id', updateOrganization)

module.exports = router