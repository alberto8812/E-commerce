import { ProductCardHOCProps } from '../../../../../interfaces/interfaces';


import { ProductCardImg } from './ProductCardImg';
import { ProductCardHome as ProductCardHOC } from './ProductCardHome';
import { ProductCardTitle } from './ProductCardTitle';


export { ProductCardImg } from './ProductCardImg';
export {ProductCardTitle} from './ProductCardTitle'

export const ProductCardHome:ProductCardHOCProps=Object.assign( ProductCardHOC, {
    Img: ProductCardImg,
    Title:ProductCardTitle,

})

export default ProductCardHome;