const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ev_administrator:jRPXuMmvYSVkc3De@ev-info.0un5qou.mongodb.net/EV-info?retryWrites=true&w=majority").then(()=>
    console.log("connection successful")
).catch((err)=>console.log("404 page not found")

)