const PostAdsModel = require('../models/PostAdsModel');
const PublisherModel=require('../models/PublisherModel');
const jwt=require("jsonwebtoken");
const SendEmailUtility = require('../utility/SendEmailUtility');
const OTPModel = require('../models/OtpModel');

//Create Publisher
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
        ProductExPrice:req.body.ProductExPrice,
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
        {$project:{_id:0,Email:1,filePath:1,FirstName:1}}
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

//After Post adS Login
exports.AfterPostADsLogin=(req,res)=>{
    let reqBody=req.body;
    PublisherModel.aggregate([
        {$match:reqBody},
        {$project:{_id:0,Email:1,filePath:1,FirstName:1}}
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
            _id:1,filePath:1,PublisherEmail:1,ProductName:1,ProductBrand:1,ProductPrice:1,ProductExPrice:1,ProductColor:1,ProductBattery:1,ProductWarranty:1,ProductCategories:1,CreatedDate:1,

        }}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}



//delete Product
exports.DeleteProduct=(req,res)=>{

    let id=req.params.id;
    let Query={_id:id};

    PostAdsModel.remove(Query,(err,data)=>{

        if(err){
            res.status(400).json({"status":"fail",data:err})
        }else{
            res.status(200).json({"status":"successfull",data:data})
        }
    })
    
}

//delete Publisher
exports.DeletePublisher=(req,res)=>{

    let id=req.params.id;
    let Query={_id:id};

    PublisherModel.remove(Query,(err,data)=>{

        if(err){
            res.status(400).json({"status":"fail",data:err})
        }else{
            res.status(200).json({"status":"successfull",data:data})
        }
    })
    
}




//password recover api start.....
//recover verify email
exports.RecoverVerifyEmail=async (req,res)=>{
    let Email = req.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000)
    try {
        // Email Account Query
        let UserCount = (await PublisherModel.aggregate([{$match: {Email:Email}}, {$count: "total"}]))
        if(UserCount.length>0){
            // OTP Insert
            let CreateOTP = await OTPModel.create({Email:Email, otp:OTPCode})
            // Email Send
            let SendEmail = await SendEmailUtility(Email,"Your PIN Code is= "+OTPCode,"BECHE-DIN PIN Verification")
            res.status(200).json({status: "success", data: SendEmail})
        }
        else{
            res.status(200).json({status: "fail", data: "No User Found"})
        }

    }catch (e) {
        res.status(200).json({status: "fail", data:e})
    }
}


exports.RecoverVerifyOTP=async(req,res)=>{
    let Email=req.params.email;
    let OTPCode=req.params.otp;
    let status=0;
    let statusUpdate=1;

    try{

    let OTPCount=(await OTPModel.aggregate([{$match:{Email:Email,otp:OTPCode,status:status}},{$count:"total"}]))
    if(OTPCount.length>0){
        let OTPUpdate = await OTPModel.updateOne({Email:Email, otp:OTPCode, status:status}, {
            Email:Email,
            otp:OTPCode,
            status:statusUpdate
        })
        res.status(200).json({status:"success", data:OTPUpdate})

    }else{
        res.status(200).json({status:"fail",data:"invalid OTP Code"})
    }
}catch(e){
    res.status(200).json({status:"fail", data:e})
}

}


exports.RecoverResetPass=async (req,res)=>{

    let Email = req.body['email'];
    let OTPCode = req.body['OTP'];
    let NewPass =  req.body['password'];
    let statusUpdate=1;

    try {
        let OTPUsedCount = await OTPModel.aggregate([{$match: {Email: Email, otp: OTPCode, status: statusUpdate}}, {$count: "total"}])
        if (OTPUsedCount.length>0) {
            let PassUpdate = await PublisherModel.updateOne({Email: Email}, {
                Password: NewPass
            })
            res.status(200).json({status: "success", data: PassUpdate})
        } else {
            res.status(200).json({status: "fail", data: "Invalid Request"})
        }
    }
    catch (e) {
        res.status(200).json({status: "fail", data:e})
    }
}

//password recover api start.....