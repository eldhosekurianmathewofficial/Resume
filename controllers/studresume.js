const express=require("express")
const router=express.Router()
const resumeMdel=require("../models/studresumemodel")
router.post("/add",async(req,res)=>{
    let data=req.body
    let resume=new resumeMdel(data)
    let result=await resume.save()
    res.json({
        status:"Success"
    })
})
router.get("/viewall",async(req,res)=>{
    let data=await resumeMdel.find()
    .populate("userId","name age phoneNumber email -_id ")
    .exec()
    res.json(data)
})
module.exports=router