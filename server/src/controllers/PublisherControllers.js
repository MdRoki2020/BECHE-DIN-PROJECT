const PostAdsModel = require('../models/PostAdsModel');
const PublisherModel=require('../models/PublisherModel');

//Create ADs
exports.CreatePublisher=(req,res)=>{

    const file=new PublisherModel({
        
        filePath:req.file.path,
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        Age:req.body.Age,
        Mobile:req.body.Mobile,
        Email:req.body.Email,
        District:req.body.District

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
        ProductFetures:req.body.ProductFetures

      });

      PostAdsModel.create(file,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
    
}