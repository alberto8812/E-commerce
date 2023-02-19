import { ProductCardHOCProps } from '../../../interfaces/interfaces';


import { ProductCardImg } from './ProductCardImg';
import { ProductCardHome as ProductCardHOC } from './ProductCardHome';



export { ProductCardImg } from './ProductCardImg';


export const ProductCardHome:ProductCardHOCProps=Object.assign( ProductCardHOC, {
    Img: ProductCardImg,

})

export default ProductCardHome;