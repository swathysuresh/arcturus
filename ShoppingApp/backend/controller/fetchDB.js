const products = require('../models/products');

const getAllProductsFromDB = async (res) =>{
    try {
        const productsFromDB = await products.find({});
        console.log("Product details from DB fetched successfully");
        res.json(productsFromDB);
    } catch (error) {
        console.error("Unable to fetch product details from DB");
        res.status(500).json({message:"Oops Server error"});
    }
}

const getProdByIdFromDB = async (req, res) =>{
    try {
        const productFromDB = await products.findById(req.params.findById);
        console.log("Product detail from DB fetched successfully");
        res.json(productFromDB);
    } catch (error) {
        console.error("Unable to fetch product detail from DB");
        res.status(500).json({message:"Oops Server error"});
    }
}

module.exports = {getAllProductsFromDB, getProdByIdFromDB};