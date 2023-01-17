const OrderModel=require('../models/OrderModel');

//create Order
exports.CreateOrder=(req,res)=>{
    let reqBody=req.body;

    OrderModel.create(reqBody,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}