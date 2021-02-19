// const path = require('path')
const express = require('express')

const exphbs  = require('express-handlebars')
const app = express()

const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1/nodeblog_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})



//Middleweare Kullanımı
//middleweare  static dosya oluşturma
app.use(express.static('public'))
//handlebars express engine
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
//Router
const mainRouter = require('./routers/main');
app.use('/',mainRouter)
//Post router

const postRouter = require('./routers/posts');
app.use('/posts', postRouter)


app.listen(port, hostname, () => {
 console.log(` Server Çalışıyor , http://${hostname}:${port}/ `);
})