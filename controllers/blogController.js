import asyncHandler from 'express-async-handler'
import Blog from '../models/blogModels.js'
import mongoose from 'mongoose'
import cloudinary from '../utils/Cloudinary.js'
import  User from "../models/userModel.js";
import Comment from '../models/comment.js';
import comment from '../models/comment.js';

//create a Blog
const SetBlog=asyncHandler(async(req,res)=>{

    const result = await cloudinary.uploader.upload(req.file.path)

    const {title,description} = req.body

    if(!title || !description){
        res.status(400)
        throw new Error('please fill all field')
    }
    console.log(req.user);
    const blog= await Blog.create({title,description,image:result.secure_url,user:req.user.id})

    if(blog){
        res.status(200).json(blog)
    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
})

// get all blog

const getAllBlog=asyncHandler(async(req,res)=>{
    const blog= await Blog.find({user:req.user.id}).sort({createdAt:-1})
    res.status(200).json(blog)
})

// get Single Blog
const getSingleBlog=asyncHandler(async(req,res)=>{
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400)
        throw new Error('no such id in database')
    }
    const blog= await Blog.findById(id)
    if(!blog){
        res.status(400)
        throw new Error('no such blog in database')
    }
    res.status(200).json(blog)

})

//delete a blog
const deleteBlog=asyncHandler(async(req,res)=>{
    const blog= await Blog.findById(req.params.id)
    
    if(!blog){
        res.status(400)

        throw new Error('no such blog in database')
    }
    const user= await User.findById(req.user.id)
    //check user
    if(!user){
        res.status(401)

        throw new Error('user not found')
    }
    //make sure loggedin user match blog user
    if(blog.user.toString() !== user.id){
        res.status(401)
        throw new Error(' user not found')
    }

    await blog.remove()
    res.status(200).json({id:req.params.id})
})

//update a blog
const updateBlog=asyncHandler(async(req,res)=>{
    
    const blog= await Blog.findById(req.params.id)

    if(!blog){
        res.status(400)

        throw new Error('no such blog in database')
    }
    
    const user= await User.findById(req.user.id)
    //check user
    if(!user){
        res.status(401)

        throw new Error('user not found')
    }
    //make sure loggedin user match blog user
    if(blog.user.toString() !== user.id){
        res.status(401)
        throw new Error(' user not found')
    }
     await cloudinary.uploader.destroy(blog.image)
     const result = await cloudinary.uploader.upload(req.file.path)
    const UpdatedBlog= await Blog.findByIdAndUpdate(req.params.id,{title:req.body.title,description:req.body.description,image:result.secure_url},{new:true})
    res.status(200).json(UpdatedBlog)
 })

// likes
const Likes=asyncHandler(async(req,res)=>{
try {
    const blog=await Blog.findById(req.params.id)
    if(!blog){
        res.status(401)
        throw new Error('no such blog in  db')
    }
 await Blog.findByIdAndUpdate(blog._id,{
        likes:blog.likes+1
    })
    res.status(200).json({message:'blog liked'})
} catch (error) {
    res.status(400).json(err)
}

})

//unlikes
const unLikes=asyncHandler(async(req,res)=>{
    try {
        const blog=await Blog.findById(req.params.id)
        if(!blog){
            res.status(401)
            throw new Error('no such blog in  db')
        }
      await Blog.findByIdAndUpdate(blog._id,{
            likes:blog.likes-1
        })
        res.status(200).json({message:'blog unliked'})
    } catch (error) {
        res.status(400).json(err)
    }
    
    })

//comments

const Blogcomment=asyncHandler(async(req,res)=>{
    try {
        const {id}=req.params
    //check user
    if(!req.user){
        res.status(401)
        throw new Error('no such user ')
    }
    //check if blog Id is valid

    if(!id){
        res.status(401)
        throw new Error('no such blog with dis id')
    }
    const {comment}= req.body
  const comments=await Comment.create({comment})
     return res.status(200).json(comments)
    } catch (error) {
        console.log(error);
        return res.status(500).json({error})
        
    }


})
 export {
    SetBlog,
    getAllBlog,
    getSingleBlog,
    deleteBlog,
    updateBlog,
    Likes,
    unLikes,
    Blogcomment,

 }