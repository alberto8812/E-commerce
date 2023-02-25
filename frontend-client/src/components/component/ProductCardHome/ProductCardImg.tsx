import { useContext } from 'react';
import { imgHome } from '../../../interfaces/interfaces';
import { ProductContext } from './ProductCardHome';


export interface Props{
  img?: imgHome;
  title?:string
  className?: string;
  style?: React.CSSProperties 
}





export const ProductCardImg = ({}:Props) => {
   const {product} = useContext(ProductContext)

    console.log(product,"aqui")


  return (
    <div>ProductCardImg</div>
  )
}
