const express = require('express');
const router =express.Router();
const { Cart } = require('../models/cartModel');
const { Category } = require('../models/categoryModel');
const { auth } = require('../middlewares/authMiddleware');

const  addCart = asyncHandler(async (req, res) => {
  
  });

  module.exports={ 
   addCart
}