const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => GET
router.get('/add-product', adminController.addProductGet);

// /admin/add-product => POST
router.post('/add-product', adminController.addProductPost);

module.exports = router;

