const usermodal = require("../model/userM")

const register=async(req,res)=>{
    const data=await usermodal.create(req.body)
    res.send(data)
    // res.redirect("/user")
}
const registerget=async(req,res)=>{
    const data= await usermodal.find({})
    res.send(data)
    // res.render("home",{data})
}
const home=async(req,res)=>{
    res.render("index")
}

const Login=async(req,res)=>{
    const {username,password}=req.body

    const data=await usermodal.findOne({username:username})
    if(!data){
        return res.send("username is not found")
    }
    if(data.password!=password){
        return res.send("password is not found")
    }
    res.cookie("data",data.id).send("success")

}
const Local=(req,res)=>{
    return res.send("successfully")
}
module.exports={register,registerget,Login,home,Local}