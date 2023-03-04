import React from 'react'
import { ReactElement } from 'react';
import { ProductHeaderProps,headerSliceShow } from '../../../interfaces/interfaces';



export interface Props{
  children?:ReactElement | ReactElement[];
  product?:ProductHeaderProps;
  img?:headerSliceShow,
  ClassName?:string;
}




export const ProductHeaderHome = ({}:Props) => {
  return (
    <div>ProductHeaderHome</div>
  )
}

export default ProductHeaderHome