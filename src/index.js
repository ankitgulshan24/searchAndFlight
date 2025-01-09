const express= require("express");
const bodyParser= require("body-parser");



const {PORT}= require('./config/serverConfig')
require('dotenv').config()
const setupAndStartServer= async()=>{
    // create a express object  
    const app= express();

    // setting the middleware 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use((req, res, nes)=>{

    })


    app.listen(PORT, ()=>{
        console.log(`server stared at ${PORT}`);
        // console.log(process.env);
        
        
    });
}

setupAndStartServer();