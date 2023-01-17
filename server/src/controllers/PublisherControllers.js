const PostAdsModel = require('../models/PostAdsModel');
const PublisherModel=require('../models/PublisherModel');

//create Publisher
exports.CreatePublisher=(req,res)=>{
    let reqBody=req.body;

    PublisherModel.create(reqBody,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Create ADs
exports.CreateADs=(req,res)=>{
    let reqBody=req.body;

    PostAdsModel.create(reqBody,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}