import React from 'react'
import { useContext } from 'react';
import { ProductContextHeader } from './ProductHeaderHome';

export interface Props{
  img?: string[];
  title?:string
  className?: string;
  style?: React.CSSProperties 
}



export const ProductHeaderCategory = ({className}:Props) => {
  const {product}=useContext(ProductContextHeader)
  console.log(product)
  return (
    <div className={className}>
      {product.map(product=>(
        
        <div key={product.title}>
          <div>
            <img src={product.img[0]} alt="img" />
          </div>
          <h3>{product.title}</h3>
        </div>

      ))}
       
 
    </div>
  )
}

export default ProductHeaderCategory
