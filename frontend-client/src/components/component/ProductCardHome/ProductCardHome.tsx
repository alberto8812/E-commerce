import { createContext, ReactElement } from 'react';
import { Product } from '../../../interfaces/interfaces';

export const ProductContext=createContext({}  )
const {Provider}=ProductContext;

export interface Props{
 // productsHome:Product;
 children?: React.ReactElement | React.ReactElement[];
}



export const ProductCardHome = ({}:Props) => {
  return (
    <div>ProductCardHome</div>
  )
}
