const express=require('express');
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
let { upload } = require('../utility/filehelperForPostAds');
let { uploadOthers } = require('../utility/filehelperForAdminAndPublisher');
const AdminController=require("../controllers/AdminControllers");
const UserController=require("../controllers/UserControllers");
const PublisherController=require("../controllers/PublisherControllers");


const router=express.Router();

//Admin management
router.post('/CreateAdmin/',uploadOthers.single('file'),AdminController.CreateAdmin);
router.post('/AdminLogin/',AdminController.AdminLogin);

//User management
router.post('/CreateOrder/',UserController.CreateOrder);
router.get('/FilterByCategories/:ProductCategories',UserController.FilterByCategories);

//Publisher Management
router.post('/CreatePublisher/',uploadOthers.single('file'),PublisherController.CreatePublisher);
router.post('/CreateADs/',upload.single('file'),PublisherController.CreateADs);
router.post('/PublisherLogin/',PublisherController.PublisherLogin);
router.get('/SpecificPublisherProductList/:PublisherEmail',PublisherController.SpecificPublisherProductList);


module.exports=router;