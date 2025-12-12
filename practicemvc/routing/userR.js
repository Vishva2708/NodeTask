const express=require("express")
const { register, registerget, Login, home, Local } = require("../controller/userC")
const passport = require("passport")

const U_router=express.Router()

U_router.post("/register",register)
U_router.get("/",registerget)
U_router.post("/login",Login)
U_router.get("/login",(req,res)=>{
    res.render("login")
})
U_router.get("/index",home)
U_router.post("/local",passport.authenticate("local"),Local)

module.exports=U_router