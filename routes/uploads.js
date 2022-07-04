const express = require('express')
const router = express.Router()
const multer  = require('multer')
const{storage} = require('../cloudinary')
const upload = multer({storage })
const imageSchema = require('../model/imageSchema');

router.post('/upload',upload.single('image'),async (req,res)=>{
    const image = (req.body,req.file)
    
    const uploadImage = new imageSchema({
         image
    })
     await uploadImage.save()
   
    res.render('show',{image})
    console.log(image)
    
   })

   module.exports = router
