const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getProducts);
router.get('/home', shopController.getProducts);
router.get('/cart', shopController.cartGet);
router.get('/checkout', shopController.checkoutGet);
router.get('/product-list', shopController.getProducts);

module.exports = router;
