const express = require('express');

const productsController = require('../controllers/shop');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
