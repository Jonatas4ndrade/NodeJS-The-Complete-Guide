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
  const {title, imgUrl, price, description} = req.body;
  //The above is used for the neat model construction below.
  const newProduct = new Product(title, imgUrl, price, description);
  console.log(newProduct);
  newProduct.save();
  res.redirect('/');
};

exports.homeGet = (req, res, next) => {
  Product.listProducts(productsList => 
    {
      res.render('shop/home', { 
          prods: productsList, 
          pageTitle: 'Home',
          path: '/'
        });
  });
};

exports.getProducts = (req, res, next) => {
  Product.listProducts(productsList => 
    {
      res.render('shop/product-list', { 
          prods: productsList, 
          pageTitle: 'Shop',
          path: '/products'
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

exports.ordersGet = (req, res, next) => {
  Product.listProducts(productsList => 
    {
      res.render('shop/orders', { 
          prods: productsList, 
          pageTitle: 'My Orders',
          path: '/orders'
        });
  });
};