const express = require('express')
const cors = require('cors')
const app = express()
const fruits = require('./routes/fruits')


app.get('/', (request, response) => {
    response.status(200).send("root functioning")
})

app.use(cors())
app.use(express.json())
app.use('/fruits', fruits)

module.exports = app
