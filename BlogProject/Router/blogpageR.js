const express = require("express")
const { blogregister, blogs, remove, editpage, update } = require("../Controller/bloagpageC")
const P_router = express.Router()

P_router.get("/", blogs)        
P_router.post("/add", blogregister) 
P_router.get("/delete", remove);
P_router.post("/update",update)
P_router.get("/edit",editpage)

module.exports = P_router
