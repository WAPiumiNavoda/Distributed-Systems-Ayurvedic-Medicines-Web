/**
 * This model is implemented for
 * the product management
 */
const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
	{
		seller: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Seller",
		},

		brandName: {
			type: String,
			required: true,
		},

		categoryName: {
			type: String,
			required: true,
		},

        productName:{
            type:String,
            required:true,
        },

		productPrice: {
			type: Number,
			required: true,
		},

		productDescription: {
			type: String,
			required: true,
		},

        pic:{
            type:String,
            default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
     
	
	{
		timestamps: true,
	}
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;