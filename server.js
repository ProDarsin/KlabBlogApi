import express from 'express'
import dotenv from 'dotenv'
import  colors from'colors'
import cors from 'cors'
import connectDB from "./config/db.js"
import router from './routes/blogRouter.js'
import swaggerDoc from 'swagger-ui-express'
import swaggerDocumentation from './helper/documentation.js'
import userRouter from'./routes/userRoute.js'
import {errorHolder} from './middlewware/errorHandler.js'
//start dot.env file
dotenv.config()
//connect to database
connectDB()
//start express app
const app= express()
//start cors
app.use(cors({origin:true}))
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHolder)

//router

app.use('/api/blogs',router)
app.use('/api/users',userRouter)
app.use('/documentation',swaggerDoc.serve)
app.use('/documentation',swaggerDoc.setup(swaggerDocumentation))
app.get('/documentation.json',(req,res)=>{
    res.getHeader('Content-Type','application/json');
    res.send(swaggerDocumentation)
})
//running server
const port=process.env.PORT||4000
app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})
