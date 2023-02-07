import mongoose from "mongoose";

const BlogSchema= new mongoose.Schema({
    user:{
         type:mongoose.Schema.Types.ObjectId,
         required:true,
         ref:'User'
    },
   title:{
    type:String,
    required:[true,'please add title']
   },
   description:{
    type:String,
    required:[true,'please add blog here']
   },
   image:{
    type:String,
    required:true
   },
   likes:{
    type:Number,
    default:0
   },
},
{
    timestamps:true
})


export default mongoose.model('Blog',BlogSchema)