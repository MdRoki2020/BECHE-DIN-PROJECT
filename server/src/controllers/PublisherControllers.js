const PostAdsModel = require('../models/PostAdsModel');
const PublisherModel=require('../models/PublisherModel');
const jwt=require("jsonwebtoken");

//Create ADs
exports.CreatePublisher=(req,res)=>{

    const file=new PublisherModel({
        
        filePath:req.file.path,
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        Age:req.body.Age,
        Mobile:req.body.Mobile,
        Email:req.body.Email,
        District:req.body.District,
        Password:req.body.Password

      });

      PublisherModel.create(file,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
    
}


//Create ADs
exports.CreateADs=(req,res)=>{

    const file=new PostAdsModel({
        
        filePath:req.file.path,
        PublisherEmail:req.body.PublisherEmail,
        ProductName:req.body.ProductName,
        ProductBrand:req.body.ProductBrand,
        ProductPrice:req.body.ProductPrice,
        ProductColor:req.body.ProductColor,
        ProductBattery:req.body.ProductBattery,
        ProductWarranty:req.body.ProductWarranty,
        ProductCategories:req.body.ProductCategories,
        ProductFetures:req.body.ProductFetures,

      });

      PostAdsModel.create(file,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
    
}

//publisher Login
exports.PublisherLogin=(req,res)=>{
    let reqBody=req.body;
    PublisherModel.aggregate([
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

//specific publisher product list
//match by publisherEmail
exports.SpecificPublisherProductList=(req,res)=>{
    let PublisherEmail=req.params.PublisherEmail;

    PostAdsModel.aggregate([
        {$match:{PublisherEmail:PublisherEmail}}, //first PublisherEmail from database
        {$project:{
            _id:1,filePath:1,PublisherEmail:1,ProductName:1,ProductBrand:1,ProductPrice:1,ProductColor:1,ProductBattery:1,ProductWarranty:1,ProductCategories:1,CreatedDate:1,

        }}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}
