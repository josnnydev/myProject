const mongoose = require('mongoose')

const uri = process.env.MONGO_URI;

const connection= ()=>{
    mongoose.connect(uri)
    .then(()=> console.log('conectado a la database'))
    .catch((e)=> console.log({message: e}))
} 

module.exports= connection;

