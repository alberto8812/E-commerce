import React,{useState }from 'react'
import { useContext } from 'react';
import { ProductContextHeader } from './ProductHeaderHome';
import Carousel from "react-material-ui-carousel";
import { Item } from './Item';


export interface Props{
  img?: string[];
  className?: string;
  style?: React.CSSProperties 
}




export const ProductHeaderSlidesShow = ({className}:Props) => {
  const {img}=useContext(ProductContextHeader)
  const item=img.img
  console.log(item)

const [CurentIndex, setCurentIndex] = useState(0)


  return (
    <div className={`${className}`}>
      <Carousel>
        {
          item.map(item=><Item key={item} item={item}/>)

          
        }
      </Carousel>
    </div>
  )
}

export default ProductHeaderSlidesShow
