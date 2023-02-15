import  express from "express";
import { setContact,getContactbyId,getContact } from "../controllers/contactUsController.js";

const router= express.Router()


router.post('/',setContact)
router.get('/',getContact)
router.get('/:id',getContactbyId)

export default router