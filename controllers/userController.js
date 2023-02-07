import asyncHandler from "express-async-handler";
import  User from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const registerUser=asyncHandler(async(req,res)=>{

    const {name,email,password}=req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('fill blank input')
    }

    // check if user exist
    const userExist= await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error('user already exist')
    }

    //hash password 
    const salt= await bcrypt.genSalt(10)
    const hashedPassword= await bcrypt.hash(password,salt)

    //create user
    const user=await User.create({
        name,
        email,
        password:hashedPassword
    })

    if(user){
        res.status(201).json({
            id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            token:generateToken(user._id)
        })
    }

})

const getUser=asyncHandler(async(req,res)=>{
    const user=await User.find({}).sort({createdAt:-1})
    if(user){
        res.status(201).json(user)
    }
})

const logIn=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    //check user email

    const user= await User.findOne({email})
    if(!user){
        res.status(401)
        throw new Error('no such email in db')
    }
    if(user && (await bcrypt.compare(password,user.password))){
      res.status(201).json({
        id:user._id,
        name:user.name,
        email:user.email,
        password:user.password,
        token:generateToken(user._id)
    })
    }


})

const getMe=asyncHandler(async(req,res)=>{
    res.status(200).json(req.user)
})



const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })

}

export {
    registerUser,
    logIn,
    getMe
}