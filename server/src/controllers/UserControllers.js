const OrderModel=require('../models/OrderModel');
const PostAdsModel=require('../models/PostAdsModel')

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


//Read Products
//match by ProductCategories
exports.FilterByCategories=(req,res)=>{
    let ProductCategories=req.params.ProductCategories;

    PostAdsModel.aggregate([
        {$match:{ProductCategories:ProductCategories}}, //first ProductCategories from database
        {$project:{
            _id:1,filePath:1,PublisherEmail:1,ProductName:1,ProductBrand:1,ProductPrice:1,ProductExPrice:1,ProductColor:1,ProductBattery:1,ProductWarranty:1,ProductCategories:1,ProductFetures:1,CreatedDate:1,

        }}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


//ReadProduct By Id
exports.ReadById=(req,res)=>{

    let id=req.params.id;
    let Query={_id:id}

    PostAdsModel.find(Query,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })

}


//All Products
exports.AllADs=(req,res)=>{

    PostAdsModel.find((err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


//search products
exports.ProductSearch=async(req,res)=>{
    try{
        let search=req.params.search;
        // let laptop = req.params.laptop;
        // let mobile=req.params.mobile;
        // let watch = req.params.watch;
        // let electronics = req.params.electronics;
        let data=await PostAdsModel.find(  
            {
                $or:[
                    {"ProductCategories":{ $regex: ".*"+search+".*","$options": "i"}},
                    {"ProductName":{ $regex: ".*"+search+".*","$options": "i"}},
                    {"ProductPrice":{ $regex: ".*"+search+".*","$options": "i"}},
                    {"ProductBrand":{ $regex: ".*"+search+".*","$options": "i"}},
                    
                    
                    // {"ProductCategories":{ $regex: ".*"+laptop+".*","$options": "i"}},
                    // {"ProductCategories":{ $regex: ".*"+mobile+".*","$options": "i"}},
                    // {"ProductCategories":{ $regex: ".*"+watch+".*","$options": "i"}},
                    // {"ProductCategories":{ $regex: ".*"+electronics+".*","$options": "i"}}, 


                    ]
            }
            );
        if(data.length>0){
            res.status(200).json({status:"success",data:data})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    }catch{
        res.status(400).json({status:"fail",data:err})
    }
}


