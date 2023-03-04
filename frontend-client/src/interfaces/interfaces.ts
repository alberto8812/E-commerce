import { Props as ProductCardProps } from "../components/component/ProductCardHome/ProductCardHome";
import { Props as ProductImageProps } from "../components/component/ProductCardHome/ProductCardImg";
import { Props as ProductCategoryProps } from "../components/component/ProductHeader/ProductHeaderCategory";
import { Props as ProductSlideProps } from "../components/component/ProductHeader/ProductHeaderSlidesShow";
import { Props as ProductHeadersProps } from "../components/component/ProductHeader/ProductHeaderHome";





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

  export interface ProductCardHeaderHOCProps{
    ({children,product,img}:ProductHeadersProps):JSX.Element,
    product:( Props: ProductCategoryProps ) => JSX.Element,
    img:( Props: ProductSlideProps ) => JSX.Element,
  }