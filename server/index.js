const express = require('express')
const massive = require('massive')
require('dotenv').config()
const ctrl = require('./controller')
const app = express()
const {SERVER_PORT, CONNECTION_STRING } = process.env
// const SERVER_PORT = 3333

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})

// app.get('/api/products', ctrl.fn)
// app.get('/api/products', ctrl.fn)
// app.get('/api/products', ctrl.fn)
// app.get('/api/products', ctrl.fn)

app.listen(SERVER_PORT, () => console.log(`Displaying products on port ${SERVER_PORT}`))
