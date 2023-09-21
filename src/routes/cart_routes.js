const cartRouter=require('express').Router();
const cartController=require('../controllers/cart_controller');

cartRouter.get('/:id',cartController.getCartForUser)
cartRouter.post('/',cartController.addToCart);
cartRouter.delete('/',cartController.removeFromCart);



module.exports=cartRouter