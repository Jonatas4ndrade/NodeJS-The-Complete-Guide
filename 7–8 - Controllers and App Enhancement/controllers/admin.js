const Product = require('../models/product');

// Path variable used to check for currently active menu in nav bar.
// Check 'main-layout.pug' for more details.
 
exports.addProductGet = (req, res, next) => {
    res.render('admin/add-product',
    { pageTitle: 'Add Product', 
      path: '/admin/add-product',
      });
  };

exports.addProductPost = (req, res, next) => {
    
    const {pTitle, pImgUrl, pPrice, pDescription} = req.body;
    //The above is required for the neater model construction below.
    const newProduct = new Product(pTitle, pImgUrl, pPrice, pDescription);
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