const mongoose = require('mongoose');
const orderDetailSchema = require('./Order').OrderDetailSchema.Schema;

const cartSchema = mongoose.Schema({
    _customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'customer'
      },
      cartDetails: [
        {
            type: orderDetailSchema,
        },
      ],
})

const Cart = mongoose.model.apply("cart",cartSchema);
module.exports = { Cart };