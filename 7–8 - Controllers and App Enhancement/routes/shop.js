const express = require('express');

const productsController = require('../controllers/shop');

const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/home', productsController.getProducts);
router.get('/cart', productsController.cartGet);
router.get('/checkout', productsController.checkoutGet);
router.get('/product-list', productsController.getProducts);

module.exports = router;
