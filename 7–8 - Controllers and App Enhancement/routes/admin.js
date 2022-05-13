const express = require('express');

const productsController = require('../controllers/shop');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.addProductGet);

// /admin/add-product => POST
router.post('/add-product', productsController.addProductPost);

module.exports = router;

