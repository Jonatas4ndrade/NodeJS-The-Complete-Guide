const productsController = require('../controllers/products');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.addProductGet);

// /admin/add-product => POST
router.post('/add-product', productsController.addProductPost);

module.exports = router;

