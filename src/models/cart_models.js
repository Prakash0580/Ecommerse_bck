const { Schema, model } = require('mongoose');



const cartItemSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'product' },
    quantity: { type: Number, dafault: 1 },

});


const cartSchema = new Schema({

    user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    items: { type: [cartItemSchema],default:[] },
    updatedOn: { type: Date,  },
    createdON: { type: Date,  }
});

cartSchema.pre('save', (next) => {

    this.updatedOn = new Date();
    this.createdON = new Date();
    next();
});


// cartSchema.pre(['update', 'findOneAndUpdate', 'updateOne'], (next) => {

//     const update = this.getUpdate();
//     delete update._id;
//     this.updatedOn = new Date();
//     next();


    

// });



const cartModel = model('cart', cartSchema);


module.exports = cartModel 