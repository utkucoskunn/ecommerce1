const express=require('express');
const pageController=require('../controllers/pagecontroller');

const router=express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/cart').get(pageController.getCartPage);
router.route('/checkout').get(pageController.getCheckoutPage);
router.route('/product-details').get(pageController.getProductDetailsPage);
router.route('/shop').get(pageController.getShopPage);

module.exports=router;