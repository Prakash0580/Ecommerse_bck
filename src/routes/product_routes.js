const productRoutes=require('express').Router();
const productController = require('../controllers/product_controller');

productRoutes.get('/',productController.fatchAllProduct);
productRoutes.get('/category/:id',productController.productGetByCategory);
productRoutes.post('/',productController.createProduct);


module.exports=productRoutes