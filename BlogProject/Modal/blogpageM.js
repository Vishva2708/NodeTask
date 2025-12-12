const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password:{
        type:String
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    category: {
        type: String,
    }
})
const Blog=mongoose.model("modal",BlogSchema)
module.exports=Blog