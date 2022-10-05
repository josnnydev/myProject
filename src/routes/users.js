const express = require('express')
const router = express.Router()
const newSchema = require('../models/registroUser')


router.post('/handleForm',(req,res)=>{
     
     
    const newData=new newSchema({
      name: req.body.name
    })

    newData.save()
    .then((data => console.log(newData)))
    .catch((e)=> console.log(e))
    res.send('formulario enviado')
 })


module.exports = router
