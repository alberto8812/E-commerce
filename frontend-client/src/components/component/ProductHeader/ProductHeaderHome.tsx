import React from 'react'
import { ReactElement, createContext } from 'react';
import { ProductHeaderProps,headerSliceShow,Product,} from '../../../interfaces/interfaces';


export const ProductContextHeader=createContext({} as ProductHeaderProps )
const {Provider}=ProductContextHeader;


export interface Props{
  children?:ReactElement | ReactElement[];
  product:Product[];
  img:headerSliceShow,
  ClassName?:string;
}




export const ProductHeaderHome = ({children,product,img,ClassName}:Props) => {
  return (
   <Provider value={{product,img}}>
      
      <div className={ClassName}>
        {children}
      </div>
      
   </Provider>
  )
}

export default ProductHeaderHome