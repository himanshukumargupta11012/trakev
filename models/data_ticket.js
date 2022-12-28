const mongoose=require("mongoose")

const tickets_trip=new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    trip_no:{
        type:Number,
        required:true
    },
    no_of_seats:{
        required:true,
        type:Number
    }
})

const ticket=new mongoose.model("Ticket",tickets_trip)

module.exports= ticket