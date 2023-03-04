
import {ProductHeaderCategory }from './ProductHeaderCategory';
import {ProductHeaderSlidesShow} from './ProductHeaderSlidesShow';
import {ProductHeaderHome as ProductHeaderHOC}  from './ProductHeaderHome';
import { ProductCardHeaderHOCProps } from '../../../interfaces/interfaces';

export {ProductHeaderCategory }from './ProductHeaderCategory';
export {ProductHeaderSlidesShow} from './ProductHeaderSlidesShow';

export const ProductHeaderHome:ProductCardHeaderHOCProps=Object.assign(ProductHeaderHOC,{
    img:ProductHeaderSlidesShow,
    product:ProductHeaderCategory
})

export default ProductHeaderHome