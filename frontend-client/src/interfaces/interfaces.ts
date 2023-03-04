import { Props as ProductCardProps } from "../components/component/ProductCardHome/ProductCardHome";
import { Props as ProductImageProps } from "../components/component/ProductCardHome/ProductCardImg";





export  interface Product {
    img:string[];
    title:string;
  
  }

  export interface ProductContextProps{
    product:Product
  }


  export interface ProductCardHOCProps{
     ({children,product}:ProductCardProps):JSX.Element,
     Img:( Props: ProductImageProps ) => JSX.Element,
     Title:(Props: ProductImageProps ) => JSX.Element,
   
  }

  //////////////////////////////HEADER/////////////////////////////

export interface headerSliceShow{
  img:string[];

}
export interface ProductHeaderProps{
  product:Product;
  img:headerSliceShow;
}

  export interface ProductCardHeaserHOCProps{
    ({product,img}:ProductHeaderProps):JSX.Element,
    SlideShow:( Props: ProductImageProps ) => JSX.Element,
    Categories:( Props: ProductImageProps ) => JSX.Element,
  }