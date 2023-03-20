
import { ProductContextsliderBody } from './SlideProductBody';
import { useContext } from 'react';


export interface Props{
  Img?:string;
  className?: string;
}


export const SlideProductImg = ({className}:Props) => {
 const {product}=useContext(ProductContextsliderBody)
 const {Img}=product
  return (
    <div className={className}>
      <img src={Img} alt="SliderBodyImg" />
    </div>
  )
}

export default SlideProductImg