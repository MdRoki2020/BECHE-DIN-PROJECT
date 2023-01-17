const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    ProductCategories:{type:String},
    FirstName:{type:String},
    LastName:{type:String},
    ContactNumber:{type:String},
    Address:{type:String},
    Division:{type:String},
    District:{type:String},
    Thana:{type:String},
    TransactionId:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
})

const OrderModel=mongoose.model('Order',DataSchema);
module.exports=OrderModel;