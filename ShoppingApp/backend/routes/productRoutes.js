const express = require('express');

const router = express.Router();

const {getAllProductsFromDB, getProdByIdFromDB} = require("../controller/fetchDB");



router.get('/',getAllProductsFromDB);

router.get('/:id',getProdByIdFromDB);

module.exports = router;