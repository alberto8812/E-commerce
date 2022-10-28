const axios = require('axios')
const { db } = require('../../database/db')
const { Products } = db.models


const getApiProducstsService=async()=>{
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


  for (const iterator of apiFilterInfo) {
     dbCreateProducts = await Products.create({
        name: iterator.name,
        price: iterator.price,
        stock: iterator.stock,
        detail: iterator.detail,
        image: iterator.image,
        rating: iterator.rating ? iterator.rating : '1',
       

    })
  }

    return apiFilterInfo
}


const getAllProudctsService=async()=>{
    const allProducts=await Products.findAll()

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
            }

    })

    return  orderProduct
}




module.exports={
    getApiProducstsService,
    getAllProudctsService
}