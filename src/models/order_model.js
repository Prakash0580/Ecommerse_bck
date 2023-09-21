const { Schema, model } = require('mongoose');

const orderItemSchema = new Schema({
    product: { type: Map, require: true },
    quantity: { type: Number, default: 1 }
})

const orderSchema = new Schema({

    user: { type: Map, required: true },
    items: { type: [orderItemSchema] },
    status:{type:String,default:"Order Placed"},
    updatedOn: { type: Date, default: Date },
    createdOn: { type: Date, dafault: Date }


});


const orderModel=new model('order',orderSchema);

module.exports=orderModel

