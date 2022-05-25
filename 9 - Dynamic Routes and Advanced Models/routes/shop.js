const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.homeGet);
router.get('/products', shopController.getProducts);
router.get('/cart', shopController.cartGet);
router.get('/orders', shopController.ordersGet);
router.get('/checkout', shopController.checkoutGet);
router.get('/product-list', shopController.getProducts);

module.exports = router;
