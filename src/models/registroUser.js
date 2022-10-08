const mongoose = require('mongoose')

const NewSchema = new mongoose.Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
      age: {type: Number, required: true},
     password: {type: String, required: true},
    date_at: {type: Date, default: Date.now}

},{versionKey: false})

module.exports = mongoose.model('registro', NewSchema)