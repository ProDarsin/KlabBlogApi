import asyncHandler from 'express-async-handler'
import RealEstate from '../models/realEstate.js'
import cloudinary from '../utils/Cloudinary.js'
import mongoose from 'mongoose'
//setRealEstate

const setEstate=asyncHandler(async(req,res)=>{

    try {
        
        const urls=[]
        const files=req.files
        for(const file of files){
            const {path}=file
            const result = await cloudinary.uploader.upload(path)
            urls.push(result)
        }
       
        const {location,price,status,description,beds,bath,yearBuilt,lotSize}=req.body
        if(!location || !price || !status|| !bath ||!beds|| !yearBuilt || !lotSize||!description){
            console.log(location)
            // res.status(401)
            // throw new Error("make sure you all field are not empty")
            return res.status(400).json("make sure you all field are not empty")
        }
    
        const realEstate=await RealEstate.create({
            location,price,status,image:urls.map(url=>url.secure_url),beds,bath,yearBuilt,lotSize,description
        })
       return res.status(200).json(realEstate)
    } catch (error) {
        return res.status(500).json(error);
    }
})

//get realEstate

const getEstate=asyncHandler(async(req,res)=>{
    try {
        const realEstate= await RealEstate.find().sort({createdAt:-1});
    if(!realEstate){
        res.status(400)
        throw new Error("no data in database")
    }
    res.status(200).json(realEstate)
    } catch (error) {
        return res.status(500).json(error);
    }
})


//get single Estate
const getSingleEstate=asyncHandler(async(req,res)=>{
 try {
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404)
        throw new Error("no such  id in db")
    }
    const realEstate= await RealEstate.findById(id);
    res.status(200).json(realEstate)
 } catch (error) {
    return res.status(500).json(error);
 }
})

//update realEstate

const updateEstate=asyncHandler(async(req,res)=>{
 try {
    
    const realEstate1= await RealEstate.findById(req.params.id)
    if(!realEstate1){
        res.status(404)
        throw new Error('no such id in db')
    }
    
    //    await cloudinary.uploader.destroy(realEstate1.image)
    const  urls=[]
    const files=req.files
    console.log(files)
   for(const file of files){
    const {path}=file
    const result= await  cloudinary.uploader.upload(path)
    urls.push(result)
    
   }
    const realEstate= await RealEstate.findByIdAndUpdate({_id: req.params.id},
        {...req.body,image:urls.map(url=>url.secure_url)},{new:true})
    res.status(200).json(realEstate)
 } catch (error) {
    
 }
})
export {
    setEstate,
    getEstate,
    updateEstate,
    getSingleEstate

}