const express=require("express")
const app=express()
app.use(express.urlencoded())
const db=require("./config/db")
app.set("view engine","ejs")
const B_router = require("./Router/blogR")
const P_router = require("./Router/blogpageR")

app.use("/blog",B_router)
app.use("/blogpage",P_router)

app.listen(3400,()=>{
    console.log('server listen')
})