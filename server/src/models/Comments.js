const mongoose=require('mongoose');
const CommentSchema=mongoose.Schema({
    ProductId:{type:String},
    Comments:{type:String},
    createdDate:{type:Date,default:Date.now()}
});
const OTPModel=mongoose.model('comments',CommentSchema);
module.exports=OTPModel;