const orderModel = require('../models/order_model');

const orderController = {

    createOrder: async (req, res) => {

        try {
            const { user, items } = req.body;
            const newOrder = orderModel({
                user: user,
                items: items
            });
            await newOrder.save();
            return res.json({
                success: true, data: newOrder, messege: "Order created"
            })


        } catch (error) {
            return res.json({
                success: false, messege: error
            })

        }



    },

    fatchOrderForUser: async (req, res) => {

        try {

            const userId = req.params.userId;
            const foundOrders = await orderModel.find({ "user.id": userId });
            return res.json({
                success: true, data: foundOrders,
            })

        } catch (error) {
            return res.json({
                success: false, messege: error
            })
        }
    },

    updateOrderStatus: async (req, res) => {

        try {

            const { orderId, status } = req.body;
            const updatedOrder = await orderModel.findOneAndUpdate({
                _id: orderId,
                status: status,
                new: true
            });
            return res.json({
                success:true, data:updatedOrder
            })

        } catch (error) {
            return res.json({
                success: false, messege: error
            })

        }
    }

}

module.exports = orderController