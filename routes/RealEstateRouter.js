import express from "express";
import { setEstate,getEstate,updateEstate,getSingleEstate,DeleteEstate } from "../controllers/realEstateController.js";
import upload from "../utils/multer.js";
const router=  express.Router();

router.get('/',getEstate)
router.post('/',upload.array('image'),setEstate)
router.get("/:id",getSingleEstate)
router.patch('/:id',upload.array('image'),updateEstate)
router.delete("/:id",DeleteEstate)

export default router