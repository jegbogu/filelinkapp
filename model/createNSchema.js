const mongoose = require('mongoose')
const {Schema} = mongoose

const formDetails = new Schema({
     
    className:{
        type:String,
        required:true,
        trim:true,

    },
     
    Section:{
        type:String,
        required:true,
       
        
    },
    Days:{
        type:String,
        required:true,
      
        
    },
    Monday:{
        type:String,
    },
    Tuesday:{
        type:String,
    },
    Wednesday:{
        type:String,
    },
    Thursday:{
        type:String,
    },
    Friday:{
        type:String,
    },
    Saturday:{
        type:String,
    },
    number_of_weeks:{
        type:Number,
    },
    registration:{
        type: Schema.Types.ObjectId,
        ref:'Registration'
    }
       
    
        
})

module.exports = mongoose.model('Form', formDetails)