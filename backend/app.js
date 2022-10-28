const express=require('express'),
      app=express(),
      morgan = require('morgan'),
      cors = require('cors'), // providing a Connect/Express middleware that can be used to enable CORS with various options.
      helmet = require("helmet"),
      productsRouter=require("./routes/productRouter")


      app.use(morgan('dev'));
      app.use(express.json());
      app.use(helmet());
      app.use(cors());

      app.use("/products",productsRouter)

module.exports=app;