const mongoose = require('mongoose')
const { Schema } = mongoose;
 

const regData = new Schema({
    Name:{
        type:String,
        require: true,
        trim:true
    },
    Email:{
        type:String,
        require: true,
        trim:true
    },
    Password:{
        type:String,
        require: true,
        trim:true
    },
    createNew:[
        {
        type: Schema.Types.ObjectId, ref: 'Form'
    }
]
})
module.exports = mongoose.model('Registration',regData) 