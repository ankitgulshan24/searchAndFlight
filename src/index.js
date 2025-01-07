const express= require("express");
const {PORT}= require('./config/serverConfig')
require('dotenv').config()
const setupAndStartServer= async()=>{
    // create a express object 
    const app= express();
    app.listen(PORT, ()=>{
        console.log(`server stared at ${PORT}`);
        // console.log(process.env);
        
        
    });
}

setupAndStartServer();