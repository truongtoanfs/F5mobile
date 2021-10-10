const Product = require('../model/productModel');
class ProductsController {
    index(req, res, next) {
        Product.find({})
        .then(products => res.json(products))
        .catch(next);
    }
}

module.exports = new ProductsController();

