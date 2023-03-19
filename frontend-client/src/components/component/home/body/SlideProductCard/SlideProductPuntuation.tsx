import { useContext } from 'react';
import { ProductContextsliderBody } from './SlideProductBody';

export interface Props{
  score?:number
  className?: string;
}



export const SlideProductPuntuation = ({className}:Props) => {
  const {product}=useContext(ProductContextsliderBody)
  return (
    <div>SlideProductPuntuation</div>
  )
}

export default SlideProductPuntuation