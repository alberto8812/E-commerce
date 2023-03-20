import { useContext } from 'react';
import { ProductContextsliderBody } from './SlideProductBody';


export interface Props{
  Title?:string
  className?: string;
}

export const SlideProductTitle = ({className}:Props) => {
  const {product}=useContext(ProductContextsliderBody);
  const {Title}=product
  return (
    <div className={className}>
      <h4>{Title}</h4>
    </div>
  )
}

export default SlideProductTitle
