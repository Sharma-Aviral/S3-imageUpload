const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("image send")
})

app.post("/uploadimg", (req , res) =>{
    res.send("image-uploaded")
})

app.listen(3000 , ()=>{
    console.log("running")
})