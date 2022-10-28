const {getApiProducstsService,getAllProudctsService}=require("../service/products/getAllProductService")

const getAllProductsControlers=async(req,res)=>{
  const createBasicProducts=await getApiProducstsService()
  const getallproducts = await getAllProudctsService()

  res.status(200).json(getallproducts)
}

module.exports={
    getAllProductsControlers
}