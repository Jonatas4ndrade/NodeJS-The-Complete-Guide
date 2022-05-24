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
    const {title, imgUrl, price, description} = req.body;
    //The above is used for the neat model construction below.
    const newProduct = new Product(title, imgUrl, price, description);
    console.log(newProduct);
    newProduct.save();
    res.redirect('/');
    };

exports.getProducts = (req, res, next) => {
  Product.listProducts(productsList => 
    {
      res.render('admin/products', { 
        prods: productsList, 
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
  });
};