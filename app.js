const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const regdata=require("./controllers/studreg")
const resdata=require("./controllers/studresume")
const exp=express()
exp.use(express.json())
exp.use(cors())
mongoose.connect("mongodb+srv://eldhosekurianofficial:Jesusislove123@cluster0.ufrxpj4.mongodb.net/resumeregDB?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

exp.use("/api/registeration",regdata)
exp.use("/api/resume",resdata)
exp.listen(3002,()=>{
    console.log("server running")
})