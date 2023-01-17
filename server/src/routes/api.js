const express=require('express');
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
let { upload } = require('../utility/filehelperForPostAds');
let { uploadOthers } = require('../utility/filehelperForAdminAndPublisher');
const AdminController=require("../controllers/AdminControllers");
const OrderController=require("../controllers/OrderControllers");
const PublisherController=require("../controllers/PublisherControllers");


const router=express.Router();

//Admin management
router.post('/CreateAdmin/',uploadOthers.single('file'),AdminController.CreateAdmin);
router.post('/AdminLogin/',AdminController.AdminLogin);

//Order management
router.post('/CreateOrder/',OrderController.CreateOrder);

//Publisher Management
router.post('/CreatePublisher/',uploadOthers.single('file'),PublisherController.CreatePublisher);
router.post('/CreateADs/',upload.single('file'),PublisherController.CreateADs);



module.exports=router;