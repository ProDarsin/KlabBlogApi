import express from "express";
import { getAllBlog,getSingleBlog,deleteBlog,updateBlog,SetBlog,Likes,unLikes,Blogcomment } from "../controllers/blogController.js";
import upload from "../utils/multer.js";
import {protect} from "../middlewware/authMiddleware.js"
// import blogScheam from '../middlewware/blogSchema.js'
const router= express.Router()

router.get('/',protect,getAllBlog)
router.post('/',protect,upload.single('image'),SetBlog)
router.delete('/:id',protect,deleteBlog)
router.get('/:id',protect,getSingleBlog)
router.patch('/:id',protect,upload.single('image'),updateBlog)
router.post('/likes/:id',protect,Likes)
router.post('/unlikes/:id',protect,unLikes)
router.post('/comment/:id',protect,Blogcomment)



export default router


// const {error,value}=blogScheam.validate(req.body)
     
// if(error){
//     res.status(400)
//     throw new Error('invalid request')
// }