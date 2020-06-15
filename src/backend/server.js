require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true})

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
 
const tagsRouter = require('./routes/tags')
app.use('/tags',tagsRouter)

app.listen(5000, () => console.log('Server Started'))