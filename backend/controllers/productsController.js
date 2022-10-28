const {getApiProducsts}=require("../service/products/getAllProductService")

const getAllProductsControlers=async(req,res)=>{
  const createBasicProducts=await getApiProducsts()

  res.status(200).json(createBasicProducts)
}


module.exports={
    getAllProductsControlers
}