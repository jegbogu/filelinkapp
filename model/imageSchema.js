const mongoose = require('mongoose')
const {Schema} = mongoose

const imgData = new Schema({
    image: [
        {
            url: String,
            filename: String,
        } 
    ]
})
module.exports = mongoose.model('Image',imgData) 