const mongoose=require("mongoose")

const user=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})
const usermodal=mongoose.model("user",user)
module.exports=usermodal