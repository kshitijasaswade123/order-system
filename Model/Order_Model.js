const mongoose = require('mongoose');
const orderModel = new mongoose.Schema({
 user_id:{
        type:Number,
        required:true
    },
    total_price:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    
    created_at:{
        type:Date,
        default:Date.now()
    }
    
})


module.exports = mongoose.model('orderModel', orderModel);