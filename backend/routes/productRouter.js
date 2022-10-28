const express=require("express"),
      router=express.Router(),
     { getAllProductsControlers}=require("../controllers/productsController")


router
        .get('/',getAllProductsControlers)


module.exports=router;