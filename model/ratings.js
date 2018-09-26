const mongoose = require('mongoose')

const ratingsSchema = new mongoose.Schema({
    ratings: {
        type: 'array'
    }
}, {
    versionKey: false
})

const ratingsData = mongoose.model('ratings', ratingsSchema, 'ratings')
module.exports = ratingsData