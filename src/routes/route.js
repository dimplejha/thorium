let obj=require('../logger/logger')
let obj1=require('../util/helper.js')
let obj2=require('../validator/formatter')
let obj3=require('../lodash')
const express = require('express');
//const lodash = require('lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.printMessage("welcome to my application . my name is dimple jha and a part of function up thorium cohort")
    obj1.date()
    obj1.month()
    obj1.information("thoriu w3 d1 thoe topic for today is node.js module system")
    obj2.trim()
    obj2.string()
    obj.string1()

    res.send('My first ever api!')
});



router.get('/hello',function(req,res){
    obj3.chunk()
    obj3.tail()
    obj3.lod()
    onj3.pairs()
    res.send('hello there!')
});

module.exports = router;