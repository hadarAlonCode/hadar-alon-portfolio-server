// @ts-nocheck

const mailRoutes = require("./server/routes/mailRoutes.js")
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let cors = require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.get('/', (req, res) => {
    res.send({ H_A: true })
})

mailRoutes(app)

const port = process.env.PORT || 5002

app.listen(port, function () {

    console.log(`Running on port ${port} CRM`)
})