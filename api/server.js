const express = require('express')
const testingsRouter = require('./routes/testings')

// Create our Express server
const server = express()

// Add routes
server.use(testingsRouter)

//Start server
const port = 8000
server.listen(port, () => {
    console.log(`API server is running on port ${port}`)
})
