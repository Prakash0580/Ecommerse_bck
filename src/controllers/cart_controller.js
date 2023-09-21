const cartModel = require('../models/cart_models');
const CartModel = require('../models/cart_models');

const CartController = {

    getCartForUser: async (req, res) => {

        try {

            const user = req.params.user;
            const findCart = await cartModel.findOne({ uset: user });
            if (!findCart) {
                return res.json({
                    success: false, data: []
                });

            } return res.json({
                success: true, data: findCart

            })

        } catch (error) {
            return res.json({ success: false, data: error });


        }

    },


    addToCart: async function (req, res) {
        try {
            const { product, user, quantity } = req.body;
            const foundCart = await CartModel.findOne({ user: user });

            // If cart does not exist
            if (!foundCart) {
                const newCart = new CartModel({ user: user });
                newCart.items.push({
                    product: product,
                    quantity: quantity
                });

                await newCart.save();
                return res.json({ success: true, data: newCart, message: "Product added to cart" });
            }

            // If cart already ezxists
            const updatedCart = await CartModel.findOneAndUpdate(
                { user: user },
                { $push: { items: { product: product, quantity: quantity } } },
                { new: true }
            );
            return res.json({ success: true, data: updatedCart, message: "Product added to cart" });
        }
        catch (error) {
            return res.json({ success: false, message: error });
        }
    },

    removeFromCart: async function (req, res) {
        try {
            const { user, product } = req.body;
            const updatedCart = await CartModel.findOneAndUpdate(
                { user: user },
                { $pull: { items: { product: product } } },
                { new: true }
            );

            return res.json({ success: true, data: updatedCart, message: "Product removed from cart" });
        }
        catch (error) {
            return res.json({ success: false, message: error });
        }
    }

};

module.exports = CartController;