const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    command: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Tag',tagSchema)