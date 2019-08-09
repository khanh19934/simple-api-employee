const express = require('express')
const mongoose = require('mongoose')
const app = express()

const start = require('./src/app')

mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb://localhost/test:27017', {useNewUrlParser: true})

const db = mongoose.connection

start(app, db)


