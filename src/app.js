require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const userApi = require('../routes/users')
const connection = require('../dbConnections/connectmongo')

const app = express()
const port = process.env.PORT

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use('/api', userApi)

app.get('/',(req,res)=>{
    res.send('Welcome to my first project')
})

//conection to database atlas mongodn
connection()


app.listen(port)
console.log(`Escuchando en el puerto: ${port}`)