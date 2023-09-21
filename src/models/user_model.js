const { Schema, model } = require("mongoose");
const uuid = require('uuid');
const bcrypt = require("bcrypt");


const userSchema = new Schema({
    id: { type: String, unique: true },
    fullName: { type: String, default: "" },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, default: "" },
    address: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    profileProgress: { type: Number, default: 0 },
    updatedOn: { type: Date },
    createdOn: { type: Date }
});

// before the save
userSchema.pre('save', function (next) {
    this.id = uuid.v1();
    this.updatedOn = new Date();
    this.createdOn = new Date();
    // Hast the Password
    // use bcrypt package
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(this.password, salt);
    // this.password = hash;

    next();

});

userSchema.pre(['update', 'findOneAndUpdate', 'updateOne'], function (next) {
    const update = this.getupdate();
    delete update._id;
    delete update.id;
    this.updatedOn = new Date();
    next();
});

const userModel = model('user', userSchema);


module.exports = userModel



