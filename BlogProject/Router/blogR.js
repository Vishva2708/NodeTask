const express=require("express")
const { register, getdata, Login } = require("../Controller/blogC")
const B_router=express.Router()

B_router.post("/register",register)
B_router.get("/",getdata)
B_router.get("/login",(req,res)=>{
    res.render("login")
})
B_router.post("/login",Login)
module.exports=B_router