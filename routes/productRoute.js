const express=require('express');
const productController=require('../controllers/productController');

const router=express.Router();

router.route('/').post(productController.createProduct);
router.route('/').get(productController.getAllProducts);


module.exports=router;