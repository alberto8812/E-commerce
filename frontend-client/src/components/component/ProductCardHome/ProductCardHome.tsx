import { createContext, ReactElement } from 'react';
import { Product , ProductContextProps } from '../../../interfaces/interfaces';


export const ProductContext=createContext({} as ProductContextProps )
const {Provider}=ProductContext;

export interface Props{
 // productsHome:Product;
 product:Product
 children?: ReactElement | ReactElement[];
 className:string;
}



export const ProductCardHome = ({children,product,className}:Props) => {
  return (
    <Provider value={{
      product,
    }}>
      <div className={className}>
      {children}
      </div>
     
    </Provider>
  )
}
