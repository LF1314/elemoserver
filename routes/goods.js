var express = require('express');
var router = express.Router();
const selldata = require('../data.json');
var goodsData = require('../model/goods')


router.get('/', (req, res) => {

    goodsData.find().then(data => {
        res.json({
            code: 200,
            msg: '连接成功！',
            data

        })
    })



})
module.exports = router;