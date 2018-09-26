const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
    seller: {
        type: 'object'
    }
}, {
    versionKey: false
})

const selletData = mongoose.model('seller', sellerSchema, 'seller')
module.exports = selletData