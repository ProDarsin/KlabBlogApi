import mongoose from "mongoose";
const UserModel= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please type your name']
    },
    email:{
        type:String,
        required:[true,'[please type your email']
    },
    password:{
        type:String,
        required:[true,'[please type your password']
    }
},{
    timestamps:true
})

export default mongoose.model('User',UserModel)