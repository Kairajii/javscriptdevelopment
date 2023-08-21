const mongoose = require('mongoose');

const backendSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String ,
        required:true
    },
    mobile_no:{
        type:Number,
        required:true,
        default:0
    }
})

module.exports = mongoose.model('demoCollection',backendSchema);