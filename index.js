const path = require("path")
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const postRoutes = require("./routes/post");
const errorHandler = require("./middlewares/errorHandler.js");
const mongoose = require('mongoose')
app.use(cors())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rest-api-node',{useNewUrlParser:true})
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"public")))

app.use ("/api/post",postRoutes)

app.use(errorHandler)

app.listen(8000,()=>{
  console.log("LIstenning on port 8000")
})