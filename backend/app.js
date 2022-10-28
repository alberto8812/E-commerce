const express=require('express'),
      app=express(),
      morgan = require('morgan'),
      cors = require('cors'), // providing a Connect/Express middleware that can be used to enable CORS with various options.
      helmet = require("helmet");


      
      app.use(express.json());
      app.use(helmet());
      app.use(cors());

module.exports=app;