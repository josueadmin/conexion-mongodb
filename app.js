require('dotenv').config();
const express = require('express');
const app = express(); //crea una nueva instacia aplicacion express

//para poder utilizar el modulo de mongoose
const mongoose = require('mongoose');

(async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI_TEST);
        console.log('te has conectado a mongodb');
    }catch(error){
        console.log(error);
    }
})()

module.exports = app;