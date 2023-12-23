import mongoose from "mongoose";



const barSchema = new mongoose.Schema({
    item_id : {type : String, required : true},
    name : String,
    category : String,
    harga : String
},{timestamps: true})

const Bar = mongoose.models.Bar || mongoose.model('Bar',barSchema)

export default Bar