require('dotenv').config();

const connectDB = require('./config/db');
const productData = require('./data/product');
const productModel = require('./models/products');

connectDB();

const importData = async () =>{
    try {
        await productModel.deleteMany({});
        await productModel.insertMany(productData);
        console.log("Data Import to MongoDB Successful");
        process.exit();
    } catch (error) {
        console.error("Data Import to MongoDB Failed")
        process.exit(1);
    }
}

importData();