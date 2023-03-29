const AdminModel=require('../models/AdminModel');
const jwt=require("jsonwebtoken");
const OrderModel = require('../models/OrderModel');
const PublisherModel = require('../models/PublisherModel');
const PostAdsModel = require('../models/PostAdsModel');
const VoucherCodeModel = require('../models/VoucherCodeModel');

exports.AdminLogin=(req,res)=>{
    let reqBody=req.body;
    AdminModel.aggregate([
        {$match:reqBody},
        {$project:{_id:0,Email:1,filePath:1}}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            if(data.length>0){
                let payload={exp:Math.floor(Date.now()/1000)+(24*60*60),data:data[0]['Email']}
                let token=jwt.sign(payload,'Secretkey123456789');
                res.status(200).json({status:"success",token:token,data:data[0]})
            }else{
                res.status(401).json({status:"unauthorized"})
            }
        }
    })
}

//Create ADs
exports.CreateAdmin=(req,res)=>{

    const file=new AdminModel({
        
        filePath:req.file.path,
        Email:req.body.Email,
        Password:req.body.Password

      });

      AdminModel.create(file,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
    
}


//Total Orders
exports.TotalOrders=(req,res)=>{
    OrderModel.aggregate([
        {$count:'total'}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Total Publisher
exports.TotalPublisher=(req,res)=>{
    PublisherModel.aggregate([
        {$count:'total'}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Total Products
exports.TotalProducts=(req,res)=>{
    PostAdsModel.aggregate([
        {$count:'total'}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Publisher List
exports.ReadOrders=(req,res)=>{

    OrderModel.find((err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Publisher List
exports.ReadPublisher=(req,res)=>{

    PublisherModel.find((err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Products List
exports.ReadProducts=(req,res)=>{

    PostAdsModel.find((err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Show Order By Transaction Id
exports.ReadOrderByTransactionId=(req,res)=>{
    let TransactionId=req.params.TransactionId;

    OrderModel.aggregate([
        {$match:{TransactionId:TransactionId}},
        {$project:{
            _id:0,ProductId:1,ProductName:1,ProductCategories:1,FirstName:1,ContactNumber:1,Division:1,District:1,Thana:1,Address:1,CreatedDate:1,

        }}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


//read product by id
// exports.ReadProductsById=(req,res)=>{
//     let id=req.params.id;

//     PostAdsModel.aggregate([
//         {$match:{_id:id}},
//         {$project:{
//             _id:1,ProductName:1,ProductBrand:1,ProductPrice:1,ProductExPrice:1,ProductColor:1,ProductBattery:1,ProductWarranty:1,ProductCategories:1,CreatedDate:1,
//         }}
//     ],(err,data)=>{
//         if(err){
//             res.status(400).json({status:"fail",data:err})
//         }else{
//             res.status(200).json({status:"success",data:data})
//         }
//     })
// }


//Show Products By  Id
// exports.ReadProductsById=(req,res)=>{

//     let id=req.params.id;
//     let Query={_id:id}

//     PostAdsModel.find(Query,(err,data)=>{

//         if(err){
//             res.status(400).json({status:"fail",data:err})
//         }else{
//             res.status(200).json({status:"success",data:data})
//         }
//     })

// }


//generate voucher code
exports.CreateVoucherCode=(req,res)=>{
    let reqBody=req.body;

    VoucherCodeModel.create(reqBody,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }

    })
}


//show voucher code
exports.ShowVoucherCode=(req,res)=>{

    VoucherCodeModel.find((err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


//status update;
exports.updateTaskStatus=(req,res)=>{
    let id= req.params.id;
    let status= req.params.status;
    let Query={_id:id};
    let reqBody={Status:status}

    OrderModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}