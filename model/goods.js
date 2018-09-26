const mongoose = require('mongoose')

const goodsSchema = new mongoose.Schema({
    goods: {
        type: 'array'
    }
}, {
    versionKey: false
})

const goodsData = mongoose.model('goods', goodsSchema, 'goods')
module.exports = goodsData