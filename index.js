const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/ecommerse");
mongoose.connect('mongodb+srv://ladpura99:PzNsterpfJxLkt3c@cluster0.qyz4fc4.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Connected Successfully to Database");
})

app.get('/', (req, res) => {
    res.send("Hello Developers! Welcome to Ecommerse API");
    console.log("Jay shree shyam");
})

const UserRoutes = require('./src/routes/user_router.js');
app.use('/user', UserRoutes);

const categoryRoutes = require('./src/routes/category_routes.js');
app.use('/category', categoryRoutes);

const productRoutes = require('./src/routes/product_routes.js');
app.use('/product', productRoutes);

const cartRouter = require('./src/routes/cart_routes.js');
app.use('/cart', cartRouter);

const orderRouter = require('./src/routes/order_routes.js');
app.use('/order', orderRouter)

app.get('/', (req, res) => {
    res.send("Data Deploy Successfully")
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server Started at PORT:${PORT}`)
});