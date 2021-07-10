
const { request, response } = require('express');
const express = require('express');
const app = express();
const PORT = 3001;

const blogs = require('./backend/blogs');

app.use((request,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    next()
})

//APIs
app.get('/home',(request, response)=>{
    response.send(blogs.blogData);
    console.log('Home');
})

app.get('/bollywood',(request, response)=>{
    response.send(blogs.blogData);
    console.log('Bollywood');
})

app.get('/technology',(request, response)=>{
    response.send(blogs.techData);
    console.log('Technology');
})


app.listen(PORT,  ()=>{
    console.log("Server is running at port "+PORT);
})