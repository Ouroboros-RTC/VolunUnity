const express = require('express')
const {
    getOrganizations,
    getOrganizationsByTag,
    getOrganizationById,
    getOrganizationByName,
    createOrganization,
    deleteOrganizationById,
    deleteOrganizationByName,
    updateOrganizationById,
    updateOrganizationByName
} = require('../controllers/organizationController')

const router = express.Router()


// GET all organizations
router.get('/organizations/', getOrganizations)

// GET organizations by tag
router.get('/organizations/tag/:id',getOrganizationsByTag)

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

// UPDATE a organization by id
router.patch('/organizations/:id', updateOrganizationById)

// UPDATE a organization
router.patch('/organizations/', updateOrganizationByName)

module.exports = router