/**
 * This controller is implemented for
 * the product management
 */
const Seller = require("../models/sellerModel");
const Product = require("../models/sellerProductModel");
const asyncHandler = require("express-async-handler");

/**
 * This method is implemented to
 * create seller products 
 */
const createProduct = asyncHandler(async (req, res) => {
	const { seller,brandName,categoryName, productName,productPrice, productDescription,pic } = req.body;

    	//get company name
	const sellers = await Seller.findOne({ _id: seller });
	const companyName = sellers.companyName;

	if (!seller || !brandName || !categoryName || !productName || !productPrice || !productDescription || !pic) {
		res.status(400);
		throw new Error("Please Fill all the feilds");
	} else {
		const product = new Product({
			seller,
			brandName,
			categoryName,
			productName ,
			productPrice,
            productDescription,
            pic,
            companyName
		});

		const createdProduct = await product.save();

		res.status(201).json(createdProduct);
	}
});

/**
 * This method is implemented to
 * get the seller all products from
 * the system for admin
 */
const getSellerProduct = asyncHandler(async (req, res) => {
	const sellerProduct = await Product.find();
	res.json(sellerProduct);
});

/**
 * This method is implemented to
 * get the seller products for each seller
 */
const getSellerProductForEachSeller = asyncHandler(async (req, res) => {
	const seller = await Seller.findById(req.params.id);

	const sellerProduct = await Product.find({ seller });

	res.json(sellerProduct);
});

/**
 * This method is implemented to
 * get the seller products by id
 */
const getSellerProductById = asyncHandler(async (req, res) => {
	const sellerProduct = await Product.findById(req.params.id);

	if (sellerProduct) {
		res.json(sellerProduct);
	} else {
		res.status(404).json({ message: "Seller Product Details not Found" });
	}
});

/**
 * This method is implemented to
 * update the seller products
 */
const updateSellerProduct = asyncHandler(async (req, res) => {
	const { seller,brandName,categoryName, productName,productPrice, productDescription,pic} = req.body;

	const sellerProduct = await Product.findById(req.params.id);

	if (sellerProduct) {
		sellerProduct.seller = seller;
        sellerProduct.brandName =brandName;
		sellerProduct.categoryName =categoryName;
		sellerProduct.productName = productName;
        sellerProduct.productPrice = productPrice;
		sellerProduct.productDescription = productDescription;
        sellerProduct.pic= pic;

		const updatedProduct = await sellerProduct.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error("Product not Found");
	}
});

/**
 * This method is implemented to
 * delete the seller products
 */

const deleteSellerProduct = asyncHandler(async (req, res) => {
	const sellerProduct = await Product.findById(req.params.id);

	if (sellerProduct) {
		await sellerProduct.remove();
		res.json({ message: "Product Removed" });
	} else {
		res.status(404);
		throw new Error("Product not Found");
	}
});

module.exports = {
	createProduct,
	getSellerProduct ,
	getSellerProductForEachSeller,
	getSellerProductById,
	updateSellerProduct,
	deleteSellerProduct,
	
};
