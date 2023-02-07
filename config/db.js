import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        mongoose.set("strictQuery",true)
        const conn= await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongoDB  connected ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}

export  default connectDB
