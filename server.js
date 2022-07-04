if(process.env.NODE_ENV !=="production"){
    require('dotenv').config();
}
const express = require('express')
const app = express()
const path = require('path')
const registrationSchema = require('./model/registrationSchema')
const createNSchema = require('./model/createNSchema');
const mongoose = require('mongoose')
const form = require('./routes/form')
const uploads = require('./routes/uploads')

const mongoURI = 'mongodb://localhost/RegApp'
 

const username = encodeURIComponent(process.env.DB_USERNAME)
const password=encodeURIComponent(process.env.DB_PASSWORD)
const databasename=encodeURIComponent(process.env.DB_NAME)

const dbLink=`mongodb+srv://${username}:${password}@cluster0.f0xopc3.mongodb.net/${databasename}` || ( mongoURI) 

main().catch(err=>console.log(err));


async function main(){
  await mongoose.connect(dbLink,{useNewUrlParser: true});
}
 
app.use(express.static(path.join(__dirname,'public')))

app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',form)
app.use('/',uploads)

// run()
// async function run() {
//     const details = new registrationSchema({
//         Name:'francis',
//         Email:'francis@gmail.com',
//         password:'password'
//     })
//     await details.save()
// }


const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('listening to port 3000')
})