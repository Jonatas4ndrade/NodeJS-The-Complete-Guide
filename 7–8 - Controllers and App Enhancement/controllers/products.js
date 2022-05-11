const Product = require('../models/product');

// Path variable used to check for currently active menu in nav bar.
// Check 'main-layout.pug' for more details.
 
exports.addProductGet = (req, res, next) => {
    res.render('add-product',
    { pageTitle: 'Add Product', 
      path: '/admin/add-product',
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
        res.render('shop', { 
           prods: productsList, 
           pageTitle: 'Shop',
           path: '/'
          });
    });
  };