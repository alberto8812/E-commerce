import { Props as ProductCardProps } from "../components/component/ProductCardHome/ProductCardHome";
import { Props as ProductImageProps } from "../components/component/ProductCardHome/ProductCardImg";



export interface imgHome{
    img1:string;
    img2:string;
    img3:string
}

export  interface Product {
    img:imgHome;
    title:string;
  
  }

  export interface ProductContextProps{
    Product:Product
  }


  export interface ProductCardHOCProps{
     ({children,Product}:ProductCardProps):JSX.Element,
     Img:( Props: ProductImageProps ) => JSX.Element,
   
  }