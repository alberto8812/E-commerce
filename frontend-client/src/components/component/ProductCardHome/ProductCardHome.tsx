import { createContext, ReactElement, Children } from 'react';
import { Product , ProductContextProps } from '../../../interfaces/interfaces';


export const ProductContext=createContext({} as ProductContextProps )
const {Provider}=ProductContext;

export interface Props{
 // productsHome:Product;
 product:Product
 children?: ReactElement | ReactElement[];
}



export const ProductCardHome = ({children,product}:Props) => {
  return (
    <Provider value={{
      product,
    }}>
      <div>
      {children}
      </div>
     
    </Provider>
  )
}
