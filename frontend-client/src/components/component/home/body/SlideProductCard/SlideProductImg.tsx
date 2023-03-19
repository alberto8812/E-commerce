
import { ProductContextsliderBody } from './SlideProductBody';
import { useContext } from 'react';


export interface Props{
  Img?:string;
  className?: string;
}


export const SlideProductImg = ({className}:Props) => {
 const {product}=useContext(ProductContextsliderBody)

  return (
    <div>SlideProductImg</div>
  )
}

export default SlideProductImg