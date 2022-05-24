const Product = require('../models/product');

// Path variable used to check for currently active menu in nav bar.
// Check 'main-layout.pug' for more details.
 
exports.addProductGet = (req, res, next) => {
    res.render('shop/product-list',
    { pageTitle: 'My Products', 
      path: '/products',
      });
  };

exports.addProductPost = (req, res, next) => {
  const newProduct = new Product(req.body.title);
  newProduct.save();
  res.redirect('/');
  };

exports.getProducts = (req, res, next) => {
    Product.listProducts(productsList => 
      {
        res.render('shop/home', { 
           prods: productsList, 
           pageTitle: 'Shop',
           path: '/'
          });
    });
  };

exports.cartGet = (req, res, next) => {
    Product.listProducts(productsList => 
      {
        res.render('shop/cart', { 
           prods: productsList, 
           pageTitle: 'My Cart',
           path: '/cart'
          });
    });
  };
  

exports.checkoutGet = (req, res, next) => {
    Product.listProducts(productsList => 
      {
        res.render('shop/checkout', { 
           prods: productsList, 
           pageTitle: 'Checkout',
           path: '/checkout'
          });
    });
  };