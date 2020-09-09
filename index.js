const express = require('express')
const welcomeRouter = require('./welcome/welcome-router')
const carsRouter = require('./cars/cars-router')
const server = express()
const port = 8000


server.use(welcomeRouter)
server.use("/cars", carsRouter)

server.listen(port, ()=>{
    console.log(`Running at port ${port}`)
})

