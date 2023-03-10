import  express  from "express"
import  {registerUser,logIn,getUserById,DeleteUser,UpdateUser,getUser,resetPassword} from '../controllers/userController.js'
import {protect} from "../middlewware/authMiddleware.js"
const router=express.Router()

router.get('/',getUser)
router.post('/',registerUser)
router.post('/login',logIn)
router.post('/reset',resetPassword)
router.get('/:id',getUserById)
router.delete('/:id',DeleteUser)
router.patch('/:id',UpdateUser)

export default router
