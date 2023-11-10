const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const CompanyRoutes = require('./routes/company')
mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })

const db=mongoose.connection;

//if there is any error during connection it will log the error
db.on('error',(err)=>{
  console.log(err)
})

//once the connection is established it prints
db.once('open',()=>{
  console.log('DB connected!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT = process.env.PORT ||3000;

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`)
})

app.use('/api/company',CompanyRoutes)