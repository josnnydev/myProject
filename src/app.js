require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const userApi = require('./routes/users')
const connection = require('./dbConnections/connectmongo')

const app = express()
const port = process.env.PORT
const statics = __dirname.replace('src', 'src/public')

 

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use('/', userApi)
app.use(express.static(statics))

app.set('views', './src/public/view' )
app.set('view engine', 'pug')



app.get('/registration',(req,res)=>{
   res.render('index')
})



//conection to database atlas mongodb
connection()


app.listen(port)
console.log(`Escuchando en el puerto: ${port}`)