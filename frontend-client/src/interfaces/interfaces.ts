import { Props as ProductCardProps } from "../components/component/home/body/ProductCardHome/ProductCardHome";
import { Props as ProductImageProps } from "../components/component/home/body/ProductCardHome/ProductCardImg";
import { Props as ProductCategoryProps } from "../components/component/home/header/ProductHeader/ProductHeaderCategory";
import { Props as ProductSlideProps } from "../components/component/home/header/ProductHeader/ProductHeaderSlidesShow";
import { Props as ProductHeadersProps } from "../components/component/home/header/ProductHeader/ProductHeaderHome";


//props slideproduct body
import { props as slideProductBodyProps } from "../components/component/home/body/SlideProductCard/SlideProductBody";
import { Props as SlideProductImgProps } from "../components/component/home/body/SlideProductCard/SlideProductImg";
import { Props as SlideProductPriceProps } from "../components/component/home/body/SlideProductCard/SlideProductPrice";
import { Props as SlideProductTitleProps } from "../components/component/home/body/SlideProductCard/SlideProductTitle";
import { Props as SlideProductScoreProps } from "../components/component/home/body/SlideProductCard/SlideProductPuntuation";



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

  //----------------------------SliderProductCard---------------------------------------------------
  export interface ProductBodySlider {
    Img:string;
    Title:string;
    Score:number;
    Price:number;
  }

  export interface ProductContextBodySliderProps{
    product:ProductBodySlider

  }


  export interface slideProductHOCProps{
    ({children,product}:slideProductBodyProps):JSX.Element,
    Img:( Props:SlideProductImgProps)=>JSX.Element;
    Title:( Props:SlideProductTitleProps)=>JSX.Element;
    Score:( Props:SlideProductScoreProps)=>JSX.Element;
    Price:( Props:SlideProductPriceProps)=>JSX.Element;
  }

  //================================================================================================================================
  //////////////////////////////HEADER/////////////////////////////

export interface headerSliceShow{
  img:string[];

}
export interface ProductHeaderProps{
  product:Product[];
  img:headerSliceShow;
}

  export interface ProductCardHeaderHOCProps{
    ({children,product,img}:ProductHeadersProps):JSX.Element,
    product:( Props: ProductCategoryProps ) => JSX.Element,
    img:( Props: ProductSlideProps ) => JSX.Element,
  }