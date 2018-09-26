var express = require('express');
var router = express.Router();
const selldata = require('../data.json');
var ratingsData = require('../model/ratings')


router.get('/', (req, res) => {

    ratingsData.find().then(data => {
        res.json({
            code: 200,
            msg: '连接成功！',
            data

        })
    })



})
module.exports = router;