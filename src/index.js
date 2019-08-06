const express = require('express')
const mysql = require('mysql')
const portconfig = require('./config/port')
const movieRouter = require('./router/movieRouter')
const categoryRouter = require('./router/categoryRouter')
const joinRouter = require('./router/joinRouter')

const server = express()
const port = portconfig
server.use(express.json())
server.use(movieRouter)
server.use(categoryRouter)
server.use(joinRouter)

server.get('/',(req,res) => {
    res.send('hai')
})

server.listen(port, () => {
    console.log('sukses di port ' + port)
})