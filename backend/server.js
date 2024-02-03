require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const serviceRoutes = require('./routes/services')
const organizationRoutes = require('./routes/organizations')

const app = express()
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api', serviceRoutes)
app.use('/api', organizationRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listening on port", process.env.PORT)
        })
    })
    .catch((error) =>{
        console.log(error)
    })
