import { useContext } from 'react';
import { ProductContextsliderBody } from './SlideProductBody';
import Rating from '@mui/material/Rating';
export interface Props{
  score?:number
  className?: string;
}



export const SlideProductPuntuation = ({className}:Props) => {
  const {product}=useContext(ProductContextsliderBody)
  const {Score}=product
  return (
    <div className={className}>
      <Rating name="read-only" value={Score} readOnly />
    </div>
  )
}

export default SlideProductPuntuation