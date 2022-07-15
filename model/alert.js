const { json } = require('body-parser')
const mongoose = require('mongoose')

const alertSchema = new mongoose.Schema({
    _id:{
        type:String,
        required: true, 
        default: Date.now
    },
    email:{
        type:String,
        required: true, 
        default: 'name'
    }, 
    name:{
        type:String,
        required: true, 
        default: 'name'
    }, 
    lat:{
        type:String, 
        required:true,
    },
    long:{
        type:String, 
        required:true,
    }, 
    alert:{
        type:String, 
        required:true,   
    },
    info:{
        type:String, 
        required:true,
    },
    date:{
        type:Date,
        required: true, 
        default: Date.now
    }
})

module.exports = mongoose.model('Alert',alertSchema)