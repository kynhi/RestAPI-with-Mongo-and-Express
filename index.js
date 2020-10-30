const path = require("path")
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const postRoutes = require("./routes/post")

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"public")))

app.use ("/api/post",postRoutes)

app.listen(8000,()=>{
  console.log("LIstenning")
})