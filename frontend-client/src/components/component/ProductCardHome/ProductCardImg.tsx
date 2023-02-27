import { useContext } from 'react';
import { ProductContext } from './ProductCardHome';


export interface Props{
  img?: string[];
  title?:string
  className?: string;
  style?: React.CSSProperties 
}





export const ProductCardImg = ({className}:Props) => {
   const {product} = useContext(ProductContext)

    console.log(product,"aqui")


  return (
    <div className={`${className}`}>
       {product.img.map(img=>(
      <img src={img} alt="img" key={img}/>
      ))}
    </div>
  )
}
