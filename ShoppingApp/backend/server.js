require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/productRoutes');

const connectDB = require('./config/db');

const app = express();

app.use(express.json());


app.use((request,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    next()
})

app.use('/api/products',productRoutes);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('Server running on port '+PORT));