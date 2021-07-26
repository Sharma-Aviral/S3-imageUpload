const express = require("express")
const app = express()
const uploadImage = require("./index")

app.post('/uploadimg', uploadImage.single('file'), (req, res, next) => {
    res.send(req.file.location)

  })

app.listen(5000 , ()=>{
    console.log("running")
})