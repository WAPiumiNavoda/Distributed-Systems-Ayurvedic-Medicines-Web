const mongoose = require('mongoose');

const orderDetailSchema = mongoose.Schema({
    _product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    price:{
        type: Number,
    },
    quantity:{
        type: Number
    },
    amount:{
        type: Number
    }
    
},{versionKey: false,_id: false});

const OrderDetailSchema = mongoose.model('orderDetails',orderDetailSchema)
module.exports = { OrderDetailSchema };
