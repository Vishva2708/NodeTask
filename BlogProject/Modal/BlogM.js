const mongoose=require("mongoose")
const modal=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})
const Blogmodal=mongoose.model("blog",modal)
module.exports=Blogmodal