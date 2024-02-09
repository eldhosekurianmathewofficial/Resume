const mongoose=require("mongoose")
const resumeModel=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
    },
    objective:{
        type:String,
        required:true,
    },
    education:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true,
    },
    experience:{
        type:String,
        required:true

    },
    Achievements:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("resume",resumeModel)