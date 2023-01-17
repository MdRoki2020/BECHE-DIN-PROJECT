const express=require('express');
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const AdminController=require("../controllers/AdminControllers")

const router=express.Router();

//Food management
router.post('/AdminLogin/',AdminController.AdminLogin);
router.post('/CreateAdmin/',AdminController.CreateAdmin);



module.exports=router;