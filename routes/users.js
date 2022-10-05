const express = require('express')
const router = express.Router()
const newSchema = require('../models/registroUser')


router.get('/user',(req,res)=>{
    res.json('user 1')
})


module.exports = router
