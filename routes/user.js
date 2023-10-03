import express  from "express";
import { userController, userDetailsController } from "../controllers/userController.js";

const router=express.Router()
router.get('/details',userDetailsController )
router.get('/', userController)


export default router