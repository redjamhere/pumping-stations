const server = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config')

const app = server()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {res.render('registration')})

app.listen(config.port, () => {console.log(`App started on ${config.port}`)})
