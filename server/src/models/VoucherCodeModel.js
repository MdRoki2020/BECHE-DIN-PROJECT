const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    VoucherCode:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
})

const VoucherCodeModel=mongoose.model('voucherCode',DataSchema);
module.exports=VoucherCodeModel;