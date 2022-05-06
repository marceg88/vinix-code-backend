const express = require('express')
const router = express.Router()

const app = express()

app.use(express.json())

const db = require('./models')
db.sequelize.sync()

const routes = require('./routes')
app.use('/', routes)

app.listen(3000, console.log("Server in the port 3000"))