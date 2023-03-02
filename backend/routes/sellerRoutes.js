const express = require('express');
const { registerSeller, authSeller } = require('../controllers/sellerController');
const {createProduct,getSellerProductForEachSeller,getSellerProductById,updateSellerProduct,deleteSellerProduct } = require('../controllers/sellerProductController')
const { protect } = require("../middlewares/authSellerMiddleware");
const router  = express.Router();

//create user routes
router.route('/sellerregister').post(registerSeller);
router.route('/sellerlogin').post(authSeller);

//products management routes
router.route("/product/create").post(createProduct);
router.route("/seller-products/:id").get(protect, getSellerProductForEachSeller);
router
	.route("/seller-product/:id")
	.get(protect, getSellerProductById)
	.put(protect, updateSellerProduct)
	.delete(protect, deleteSellerProduct);


module.exports = router;
