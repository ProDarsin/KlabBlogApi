import mongoose from 'mongoose'

const realEstateShema=new mongoose.Schema({

    location:{
        province:{
            type:String,
            required:[true,'please fill blank field']
        },
        district:{
            type:String,
            required:[true,'please fill blank field']
        },
        street:{
            type:String,
            required:[true,'please fill blank field']
        }
    },
    price:{
        type:String,
        required:[true,'please fill blank field']
    },
    image:{
     type:Array,
     required:[true,'please add at least 2 image']
    },
    beds:{
        type:Number,
        required:[true,'please fill blank field']
    },
    bath:{
     type:Number,
     required:[true,'please fill blank field']
    },
    yearBuilt:{
        type:Number,
        required:[true,'please fill blank field']
    },
    lotSize:{
        type:Number,
        required:[true,'please fill blank field']
    },
    status:{
        type:String,
        required:[true,'please fill blank field']
    },
    description:{
        type:String,
        required:[true,'please fill blank field']
    },
},{
    timestamps:true
})

export default mongoose.model('RealEstate',realEstateShema)