const axios = require('axios')
const { db } = require('../../database/db')
const { Product } = db.models


const getApiProducsts=async()=>{
    const apiUrl = (await axios.get(`https://api.escuelajs.co/api/v1/products`)).data
    const apiFilterInfo=await apiUrl.map(e=>{
    if(e.category.name==='Electronics'){
        return{
       
            name: e.title,
            detail: e.description,
            price: e.price,
            stock: e.stock,
            sales: e.sales,
            image: e.images.join(","),
            rating: e.rating
            }
        }
        return"";

    }
        
    ).filter(e=>e!=="")
    return apiFilterInfo
}

module.exports={
    getApiProducsts
}