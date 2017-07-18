require('dotenv').config({path: './models/.env'})

const express = require('express')
const bodyParser = require('body-parser')
const authMiddleware = require('./middleware/auth')
const mongoose = require('mongoose')
const coursesRouter = require('./routes/coursesRouter')
const authRouter = require('./routes/auth')
// const router = express.Router()
const peopleRouter = require('./routes/people')

const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(authMiddleware.initialize)

server.use(coursesRouter)
//Connect passport to express
server.use(peopleRouter)
server.use(authRouter)

server.use((error, req, res, next) => {
  const status = error.status || 500
  res.status(status).json({
    error: { message: error.message}
  })
})
const port = 8000
server.listen(port, () => {
  console.log(`API server is running on port ${port}`)
})
