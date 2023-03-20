import { useContext } from 'react';
import { ProductContextsliderBody } from './SlideProductBody';

export interface Props{
  score?:number
  className?: string;
}



export const SlideProductPuntuation = ({className}:Props) => {
  const {product}=useContext(ProductContextsliderBody)
  const {Score}=product
  return (
    <div><h4>{Score}</h4></div>
  )
}

export default SlideProductPuntuation