import mongoose from "mongoose";

const ContactUsSchema= new mongoose.Schema({

    userEmail:{
        type:String,
        required:[true,'please fill blank field']
    },
    message:{
        type:String,
        required:[true,'please fill blank field']
    },
    name:{
        type:String,
        required:[true,'please fill blank field']
    },
    phone:{
        type:String,
        required:[true,'please fill blank field']
    }
},{
    timestamps:true
})

export default mongoose.model('ContactUs',ContactUsSchema)