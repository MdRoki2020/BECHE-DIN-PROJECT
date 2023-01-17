const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    filePath:{type:String},
    Email:{type:String,unique:true},
    Password:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
})

const AdminModel=mongoose.model('Admin',DataSchema);
module.exports=AdminModel;