const express = require('express'); 
var userController=require('../src/user/userController')
var categoryController=require('../src/categories/categoryController')
var dogsController=require('../src/dogs/dogsController')
const router=express.Router();


router.route('/user/signin').post(userController.signinUserControllerFun);
router.route('/user/login').get(userController.loginUserControllerFun);
router.route('/category/cat').get(categoryController.categoryControllerFun);
router.route('/dogs/dog').get(dogsController.dogsControllerFun);

module.exports=router;