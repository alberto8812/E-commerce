import { useContext } from 'react';

import { ProductContext } from './ProductCardHome';


export interface Props{
 
  title?:string
  className?: string;
  style?: React.CSSProperties 
}





export const ProductCardImg = () => {
   const {product} = useContext(ProductContext)
   const {img,title}=product
    console.log(product,"aqui")


  return (
    <div>
      <h1>{title}</h1>
      {img.map(img=>(
       <img src={img} alt="Audio" key={img}/>
      ))}
    </div>
  )
}
