import { useContext } from 'react';
import { ProductContext } from './ProductCardHome';

export interface props {
    className?:string;
}

export const ProductCardTitle = ({className}:props) => {
    const {product} = useContext(ProductContext)

    console.log(product.title)
  return (
    <div className={`${className}`}>
        <h2>{product.title}</h2>
    </div>
  )
}
