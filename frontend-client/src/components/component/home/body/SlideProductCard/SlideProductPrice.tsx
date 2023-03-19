import { useContext } from 'react';
import { ProductContextsliderBody } from './SlideProductBody';

export interface Props{
  Price?:number
  className?: string;
}

export const SlideProductPrice = ({className}:Props) => {
  const {product}=useContext(ProductContextsliderBody)
  return (
    <div>SlideProductPrice</div>
  )
}

export default SlideProductPrice
