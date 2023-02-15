import mongoose from "mongoose";

const commentSchema= new mongoose.Schema({

   comment:{
    type:String,
    required:true 
   },
   blog:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Blog",
    required:true

   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
   }

},
{
    timestamps:true
})


export default mongoose.model('Comment',commentSchema)