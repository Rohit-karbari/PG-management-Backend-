const express = require('express')
const app = express()
const port = 3050

const configureDB = require('./Config/database')
configureDB()
const routes = require('./Config/routs')

const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use('/', routes)
app.listen(port, () => {
    console.log('listining on port', port) 
})