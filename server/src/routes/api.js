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
router.get('/TotalOrders/',AdminController.TotalOrders);
router.get('/TotalPublisher/',AdminController.TotalPublisher);
router.get('/TotalProducts/',AdminController.TotalProducts);
router.get('/ReadOrders/',AdminController.ReadOrders);
router.get('/ReadPublisher/',AdminController.ReadPublisher);
router.get('/ReadProducts/',AdminController.ReadProducts);
router.get('/ReadOrderByTransactionId/:TransactionId',AdminController.ReadOrderByTransactionId);
// router.get('/ReadProductsById/:id',AdminController.ReadProductsById);
router.post('/CreateVoucherCode',AdminController.CreateVoucherCode);
router.get('/ShowVoucherCode',AdminController.ShowVoucherCode);


//User management
router.post('/CreateOrder/',UserController.CreateOrder);
router.get('/FilterByCategories/:ProductCategories',UserController.FilterByCategories);
router.get('/ReadById/:id',UserController.ReadById);
router.get('/AllADs/',UserController.AllADs);
router.get('/ProductSearch/:search/',UserController.ProductSearch); //:laptop/:mobile/:watch/:electronics?
router.get('/CheckBoxSearch/:data/',UserController.CheckBoxSearch);
router.post('/CreateComment/',UserController.CreateComment);
router.get('/ReadCommentByProductId/:ProductId',UserController.ReadCommentByProductId);


//Publisher Management
router.post('/CreatePublisher/',uploadOthers.single('file'),PublisherController.CreatePublisher);
router.post('/CreateADs/',upload.single('file'),AuthVerifyMiddleware,PublisherController.CreateADs);
router.post('/PublisherLogin/',PublisherController.PublisherLogin);
router.post('/AfterPostADsLogin/',PublisherController.AfterPostADsLogin);
router.get('/SpecificPublisherProductList/:PublisherEmail',PublisherController.SpecificPublisherProductList);
router.get('/DeleteProduct/:id',AuthVerifyMiddleware,PublisherController.DeleteProduct);
router.get('/DeletePublisher/:id',PublisherController.DeletePublisher);
router.post('/UpdateProduct/:id',PublisherController.UpdateProduct);


//for recovery password
router.get("/RecoverVerifyEmail/:email",PublisherController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",PublisherController.RecoverVerifyOTP);
router.post("/RecoverResetPass",PublisherController.RecoverResetPass);

module.exports=router;