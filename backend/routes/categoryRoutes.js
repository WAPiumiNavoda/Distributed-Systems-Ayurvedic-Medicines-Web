const express = require('express');
const { getCategory, createCategory, getCategoryById, updateCategory, deleteCategory } = require('../controllers/categoryControllers');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/getCategory').get(protect ,getCategory);
router.route('/createCategory').post(protect,createCategory);
router.route('/:id').get(getCategoryById).put(protect,updateCategory).delete(protect,deleteCategory);


module.exports = router;