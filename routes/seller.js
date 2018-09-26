var express = require('express');
var router = express.Router();
const selldata = require('../data.json');
var sellerData = require('../model/seller')
router.post('/', (req, res) => {
    console.log(req.body)
    sellerData.create({
        seller
    }).then(data => {
        res.json({
            code: 200,
            msg: '写入成功',
            data
        })
    })
})

router.get('/', (req, res) => {
    res.json({
        code: 200,
        msg: '连接成功！',
        data: selldata.seller
    })


})
module.exports = router;