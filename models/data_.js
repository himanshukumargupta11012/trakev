const mongoose=require("mongoose");

const booking =new mongoose.Schema({
    real_id:{
        type:String,
        // required:true,
        unique:true
    },
    ev_name:{
        type:String,
        required:true,
    },
    no_of_seats:{
        type:Number,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})


const Book=new mongoose.model("Booking",booking)

module.exports=Book