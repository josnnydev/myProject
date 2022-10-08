const express = require('express')
const router = express.Router()
const NewSchema = require('../models/registroUser')


router.post('/handleForm',(req,res)=>{
     
     
    let newData=new NewSchema({
      name: req.body.name,
      lastName: req.body.lastName,
      age: req.body.age,
      password: req.body.password
    })
    
    newData.save()
    .then((data => res.send(`Te haz registrado correctamente... ${data.name}`)))
     .catch((e)=> console.log(e))
     
 })
  
 // search all users
 router.get('/user/all',(req,res)=>{
   NewSchema.find((error,data)=>{
  if(error){
    console.log(error)
  }else{
    res.json(data)
  }
  })
   
 })

 //search last user
 router.get('/user/last',(req,res)=>{
  NewSchema.find().skip(1).exec((error,data)=>{
 if(error){
   console.log(error)
 }else{
   res.json(data)
 }
 })
  
})

 //search first user
 router.get('/user', (req,res)=>{
  
   NewSchema.findOne((error,data)=>{
  if(error){
    console.log(error)
  }else{
    res.json(data)
  }
  })
   
 })

 //search one user for id
 router.get('/user/id', (req,res)=>{
  
  NewSchema.findById('633f7ed3de77da65e5f924d6',(error,data)=>{
  if(error){
    res.status(404).send({message: error})
  }else{
    res.json(data)
  }
  })
   
 })
 
 //delete user
 router.get('/user/delete', (req,res)=>{
  
  NewSchema.findByIdAndRemove('633f7ed3de77da65e5f924d6',(error,data)=>{
  if(error){
    res.status(404).send(error)
  }else{
    res.send('usuario eliminado')
  }
  })
   
 })



module.exports = router
