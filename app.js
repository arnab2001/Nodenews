const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = 5000


app.use(express.static('public'))


app.set('views', './src/views')
console.log(__dirname);
app.set('view engine', 'ejs')


app.use(express.urlencoded({extended: true})); // New



// Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)
app.use('/article', newsRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))