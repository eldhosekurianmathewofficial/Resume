const express=require("express")
const router=express.Router()
const regmodel=require("../models/studregmodel")
const bcrypt=require("bcryptjs")


HashGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)

}

router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    const hashedpass= await HashGenerator(password)
    data.password=hashedpass
    let load=new regmodel(data)
    let result=await load.save()
    res.json({
        status:"success"
    })
})

router.post("/login",async(req,res)=>{
    let data=req.body
    let email=req.body.email
    let input=await regmodel.findOne({"email":email})
    if(!input)
    {
        return res.json({
            status:"invalid email"
        })
    }
    else{
        let dbpass=input.password
        let oripass=data.password
        const match = await bcrypt.compare(oripass,dbpass)
        if(!match)
        {
            return res.json({
                status:"invalid password"
            })
        }
        else{
            return res.json({
                status:"succesful"
            })
        }
    }
})
module.exports=router