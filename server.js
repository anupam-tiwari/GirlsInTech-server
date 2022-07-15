const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
//const DBURL = process.env.DBURL
require('dotenv').config();
const cors = require('cors')
const alerts = require('./routes/alerts')

const DBURL = process.env.DBURL

const app = express(); 
app.use(bodyParser.json())
app.use(cors())

app.use('/alerts', alerts)

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }

  mongoose.connect(DBURL, connectionParams)
  .then(() => {
    console.log("connected to db")
  }).catch((err) => {
    console.log(`${err}`)
  })



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('hello world')
})

app.listen(process.env.PORT || 4000, () => console.log(`Started server`));