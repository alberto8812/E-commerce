import { useContext } from 'react';
import { ProductContextsliderBody } from './SlideProductBody';


export interface Props{
  Title?:string
  className?: string;
}

export const SlideProductTitle = ({className}:Props) => {
  const {product}=useContext(ProductContextsliderBody)
  return (
    <div>SlideProductTitle</div>
  )
}

export default SlideProductTitle
