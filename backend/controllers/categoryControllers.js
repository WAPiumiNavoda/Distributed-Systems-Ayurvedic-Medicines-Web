const Category = require('../models/categoryModel');
const asyncHandler = require('express-async-handler');

//Get Category controller
const getCategory =  asyncHandler(
    async(req,res)=>{
        const category = await Category.find()
        res.json(category);
    }
)

//Create caregory controller
const  createCategory = asyncHandler(async (req, res) => {
    const { foodname, price, category, pic } = req.body;
  
    if (!foodname || !price || !category || !pic) {
      res.status(400);
      throw new Error("Please Fill all the feilds");
    } else {
      const Product = new Category({ user: req.user._id, foodname,price, category, pic });
  
      const createdProduct = await Product.save();
  
      res.status(201).json(createdProduct);
    }
  });


module.exports={ getCategory,createCategory }