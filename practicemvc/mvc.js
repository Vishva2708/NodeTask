const express = require("express");
const app = express();
app.set("view engine","ejs")
const db = require("./config/db");
app.use(express.json());
app.use(express.urlencoded())
const passport=require("passport")
const session=require("express-session")

const U_router = require("./routing/userR");
const LocalAuth = require("./middleware/Localauth");

app.use(session({secret:'keyboard cat',resave:true,saveUninitialized:true}))
LocalAuth(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use("/user", U_router)
app.listen(4003, () => {
  console.log("server listen");
});
