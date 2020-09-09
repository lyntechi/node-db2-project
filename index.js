const express = require('express')
const welcomeRouter = require('./welcome/welcome-router')
const server = express()
const port = 8000


server.use(welcomeRouter)

server.listen(port, ()=>{
    console.log(`Running at port ${port}`)
})

