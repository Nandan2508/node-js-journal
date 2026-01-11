const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    return res.send(`hello from home page , Hey ${req.query.name} , you are ${req.query.age} years old `);
})
app.get('/about',(req,res)=>{
    return res.send("This is about page ");
})
app.listen(8000,()=>console.log("server is running on port 8000"));