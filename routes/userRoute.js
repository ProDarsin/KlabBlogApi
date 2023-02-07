import  express  from "express"
import  {registerUser,logIn,getMe} from '../controllers/userController.js'
import {protect} from "../middlewware/authMiddleware.js"
const router=express.Router()

router.post('/',registerUser)
router.post('/login',logIn)
router.get('/me',protect,getMe)

export default router
