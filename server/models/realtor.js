const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const realtorSchema = new Schema({
    name: {
        type:String, 
        required: "Name cannot be blank"
    }, 
    img:{
        type:String, 
        required: "Must include a photo"
    }, 
    housesSold:{
        type:Number, 
    }
})

module.exports = mongoose.model("Realtor", realtorSchema);