const express = require('express');
const { registerUser } = require('../controllers/userControllers');

const router  = express.Router();

//create user routes
router.route('/').post(registerUser);

module.exports = router;
