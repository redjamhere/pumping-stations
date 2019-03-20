const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const config = require('../config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
    res.send({
        title: 'oh shit',
        description: 'dweqf'
    })
})

app.listen(process.env.PORT || config.port, () => {console.log(`Server start on port ${config.port} ...`)})

