const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    Email:{type:String,unique:true},
    Password:{type:String},
    ImagePath:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
})

const AdminModel=mongoose.model('Admin',DataSchema);
module.exports=AdminModel;