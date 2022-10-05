const mongoose = require('mongoose')

const newSchema = mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    password: String,
    date_at: {type: Date, default: Date.now}

},{versionKey: false})

module.exports = mongoose.model('registro', newSchema)