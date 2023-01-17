const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    Age:{type:String},
    Mobile:{type:String},
    Email:{type:String,unique:true},
    Image:{type:String},
    District:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
})

const PublisherModel=mongoose.model('Publisher',DataSchema);
module.exports=PublisherModel;