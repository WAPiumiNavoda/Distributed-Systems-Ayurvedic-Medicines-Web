const User = require('../models/userModel')
const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async(req,res) =>{
    const { name,email, password,pic }= req.body;

    const userExistes = await User.findOne({ email });// chech the email which was already existes or not

    if(userExistes){
        res.status(400)
        throw new Error('User Allready Exsits');
    }

     //create a obejct called user 
    const user = await User.create({
        name,
        email,
        password,
        pic
    })

    //if user doesn't already inserted create a user
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email: user.email,
            isAdmin:user.isAdmin,
            pic: user.pic,
            // token:genarateToken(user._id)
        })
    }else{
          res.status(400)
          throw new Error('Error Occured')
    }
})

module.exports = {registerUser};