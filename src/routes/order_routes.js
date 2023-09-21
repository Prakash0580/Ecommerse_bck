
const orderRouter = require('express').Router();
const orderController = require("../controllers/order_controller");

orderRouter.get('/:userId', orderController.fatchOrderForUser);
orderRouter.post('/', orderController.createOrder);
orderRouter.put('/updateStatus', orderController.updateOrderStatus)



module.exports = orderRouter