const axios = require('axios')
const { db } = require('../../database/db')
const { Products,Category } = db.models
const category=require("../../database/dbjson/category.json")



const getCategory=async()=>{
    let dbfilltable=[]
    const validation_1=await Category.findAll()
    if(!validation_1.length){
   
      
         for (const iterator of category) {
            dbfilltable=await Category.create({
                name:iterator.name,
                image:iterator.image
             })
            }
       
        }
   return  ;
}

const getApiProducstsService=async()=>{
 const validation=await Products.findAll()

 if(!validation.length){
    let dbCreateProducts = []
    const apiUrl = (await axios.get(`https://api.escuelajs.co/api/v1/products`)).data

    const apiFilterInfo=await apiUrl.map(e=>{
    if(e.category.name==='Electronics'){
        return{
       
            name: e.title,
            detail: e.description,
            price: e.price,
            stock: e.id,
            sales: e.sales,
            image: e.images.join(","),
            rating: e.rating
            }
        }
        return"";

    }
        
    ).filter(e=>e!=="")

  const category=await Category.findOne({where:{name:"Smarthwatch"}})

  for (const iterator of apiFilterInfo) {
     dbCreateProducts = await Products.create({
        name: iterator.name,
        price: iterator.price,
        stock: iterator.stock,
        detail: iterator.detail,
        image: iterator.image,
        rating: iterator.rating ? iterator.rating : '1',
       

    })
    await category.addProduct(dbCreateProducts)
  }
}
    return ;
}


const getAllProudctsService=async()=>{
    const allProducts=await Products.findAll({
        include:[{model:Category, attributes: ['name','image'] }]
    })
   

    const orderProduct=allProducts.map(res=>{
     
      return{  
                id:res.id,
                name:res.name,
                price: res.price,
                stock: res.stock,
                detail: res.detail,
                image: res.image.split(","),
                rating: res.rating,
                deleted:res.deleted,
                category:res.category
            }

    })

    return  orderProduct
}




module.exports={
    getApiProducstsService,
    getAllProudctsService,
    getCategory
}