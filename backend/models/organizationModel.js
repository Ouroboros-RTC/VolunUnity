const mongoose = require('mongoose')

const Schema = mongoose.Schema

const organizationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: " "
    },
    address: {
        type: String,
        default: " "
    },
    phoneNumber: Number,
    email: {
        type: String,
        default: " "
    },
    link: {
        type: String,
        default: " "
    },
    services: {
        type: [{ 
            type: Schema.Types.ObjectId,
            ref: 'Service',
        }],
        default: []
    },
    tag:{
        type: Schema.Types.ObjectId,
        ref: 'Tag',
    }
}, { timestamps: true })

module.exports = mongoose.model('Organization', organizationSchema);