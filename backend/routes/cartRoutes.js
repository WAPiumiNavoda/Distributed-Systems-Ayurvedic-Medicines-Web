const express = require('express');
const router =express.Router();
const { Cart } = require('../models/cartModel');
const { Category } = require('../models/categoryModel');
const { auth } = require('../middlewares/authMiddleware');
const { addCart } = require('../controllers/cartController');

router.post('/addCart', auth,async(req,res)=>{

})