const Blogmodal = require("../Modal/BlogM")

const register=async(req,res)=>{
    await Blogmodal.create(req.body)
    res.redirect("/blog/login")
}
const getdata=async (req,res) => {
    const data=await Blogmodal.find({})
    res.render("Blog",{data})
}

const Login=async(req,res)=>{
    const {username,password}=req.body
    const data=await Blogmodal.findOne({username:username})
    if(!data){
        return res.send("username not found")
    }
    if(data.password!=password){
        return res.send("password is not match")
    }
  res.cookie("data", data.id) 
   res.redirect("/blogpage")

}
module.exports={register,getdata,Login}