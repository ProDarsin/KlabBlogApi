import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import ContactUs from "../models/contactUs.js";
import nodemailer from'nodemailer'
import Mailgen from 'mailgen'

//set contact

const setContact=asyncHandler(async(req,res)=>{
    const {phone, name, userEmail,message}=req.body
    
    if(!phone|| !name||!userEmail||!message){
        res.status(401)
        throw new Error('please there is missing  field')
    }
         
    let config={
      service:"gmail",
       auth:{
           user: 'ndungutsedars7@gmail.com', // your gmail 
           pass: 'wrthlgrojmacudun' // your password
       }
    }
    
   
  let transporter= nodemailer.createTransport(config)   

  // Configure mailgen by setting a theme and your product info
  let mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        // Appears in header & footer of e-mails
        name: 'Mailgen',
        link: 'https://mailgen.js/'
    }
});

let email = {
    body: {
        name: name,
        intro: 'Welcome to RealEstate! We\'re very excited to have you on board.',
        data: {
            description: 'your email has beed accepted',
           
        },
        outro: 'Need help, or have questions? Just reply to this email.'
    }
};
 // Generate an HTML email with the provided contents
let mail= mailGenerator.generate(email)

let emailMessage= {
    from:'ndungutsedars7@gmail.com',
    to:userEmail,
    subject:'Hello ✔',
    html:mail
}

const emailSent=await transporter.sendMail(emailMessage)

if(!emailSent){
    res.status(500)
    throw new Error('email not sent')
}

    const contact=await ContactUs.create({phone,name,userEmail,message})

    res.status(201).json(contact)

  

})

//get contact

const getContact= asyncHandler(async(req,res)=>{
    const contact=await ContactUs.find({}).sort({createdAt:-1})
    if(!contact){
        res.status(401)
        throw new Error('nothing exist in db ')
    }
    res.status(200).json(contact)
})

//get by id
const  getContactbyId=asyncHandler(async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(401)
        throw new Error('no such id in db')
    }

    const contact= await ContactUs.findById(id)
    res.status(200).json(contact)
})


export{
    getContact,
    setContact,
    getContactbyId

}