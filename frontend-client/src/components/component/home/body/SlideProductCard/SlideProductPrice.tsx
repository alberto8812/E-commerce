import { useContext } from 'react';
import { ProductContextsliderBody } from './SlideProductBody';

export interface Props{
  Price?:number
  className?: string;
}

export const SlideProductPrice = ({className}:Props) => {
  const {product}=useContext(ProductContextsliderBody)
  const {Price}=product
  return (
    <div className={className}>
      <h4>${Price}</h4>
    </div>
  )
}

export default SlideProductPrice
