const express=require('express');
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const AdminController=require("../controllers/AdminControllers");
const OrderController=require("../controllers/OrderControllers");
const PublisherController=require("../controllers/PublisherControllers");


const router=express.Router();

//Admin management
router.post('/CreateAdmin/',AdminController.CreateAdmin);
router.post('/AdminLogin/',AdminController.AdminLogin);

//Order management
router.post('/CreateOrder/',OrderController.CreateOrder);

//Publisher Management
router.post('/CreatePublisher/',PublisherController.CreatePublisher);
router.post('/CreateADs/',PublisherController.CreateADs);



module.exports=router;