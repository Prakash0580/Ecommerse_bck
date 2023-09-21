const { Schema, model } = require('mongoose');


const productSchema = new Schema({

    // ref me category model ki category likhte hai jo database me banti h

    // note :- category me data send karte time category ki id deni hogi
    category: { type: Schema.Types.ObjectId, ref: 'category', required: true },
    title: { type: String, required: [true, "title is required"] },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
    images: { type: Array, dafault: "" },
    updatedOn: { type: Date, default: Date() },
    createdOn: { type: Date, dafault: Date() },

});



// productSchema.pre('save', (next) => {
//     this.updatedOn = new Date();
//     this.createdOn = new Date();
//     next();
// });




// productSchema.pre(['update', 'findOneAndUpadate', 'updateOne'],(next)=>{
//     const update = this.getUpdate();
//     delete update._id;
//     this.updatedOn= new Date()
//     next();
// });

const productModel = model('product', productSchema);

module.exports = productModel