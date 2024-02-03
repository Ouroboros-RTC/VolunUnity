const express = require('express')
const {
    getOrganizations,
    getOrganization,
    createOrganization,
    deleteOrganization,
    updateOrganization
} = require('../controllers/organizationController')

const router = express.Router()


// GET all organizations
router.get('/organizations/', getOrganizations)

// GET a single organization
router.get('/organizations/:id',getOrganization)

// POST a new organization
router.post('/organizations/', createOrganization)

// DELETE a organization
router.delete('/organizations/:id', deleteOrganization)

// UPDATE a organization
router.patch('/organizations/:id', updateOrganization)

module.exports = router