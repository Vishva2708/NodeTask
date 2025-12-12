const usermodal = require("../model/userM")

const Localstrategy=require("passport-local").Strategy
const LocalAuth=(passport)=>{
    passport.use(new Localstrategy(async(username,password,done)=>{
        const user=await usermodal.findOne({username:username})
        if(!user){
            return done(null,false,{message:"username is not found"})
        }
        if(user.password!=password){
            return done(null,false,{message:"password not match"})
        }
        return done(null,user)
    }))
    passport.serializeUser(function(user,done){
        done(null,user.id)
    })
     passport.deserializeUser(function(id,done){
        usermodal.findById(id,function(err,user){
            done(err,user)
        })
    })
}
module.exports=LocalAuth