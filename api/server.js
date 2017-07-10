require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const coursesRouter = require('./routes/coursesRouter')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

const router = express.Router()
server.use(coursesRouter);

const port = 8000
server.listen(port, () => {
  console.log(`API server is running on port ${port}`)
})
