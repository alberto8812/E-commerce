import React from 'react'
import { ReactElement, createContext } from 'react';
import { ProductHeaderProps,headerSliceShow,Product,} from '../../../interfaces/interfaces';


export const PeoductContext=createContext({} as ProductHeaderProps )
const {Provider}=PeoductContext;


export interface Props{
  children?:ReactElement | ReactElement[];
  product:Product;
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