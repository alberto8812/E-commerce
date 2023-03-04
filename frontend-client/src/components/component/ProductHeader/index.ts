export {ProductHeaderSlidesShow} from './ProductHeaderSlidesShow';



import {ProductHeaderCategory }from './ProductHeaderCategory';
import {ProductHeaderSlidesShow} from './ProductHeaderSlidesShow';
import {ProductHeaderHome as ProductHeaderHOC}  from './ProductHeaderHome';
import { ProductCardHeaserHOCProps } from '../../../interfaces/interfaces';

export {ProductHeaderCategory }from './ProductHeaderCategory';


export const ProductHeaderHome:ProductHeaderSlidesShow=Object.assign(ProductHeaderHOC,{
    SlideShow:ProductHeaderSlidesShow,
    Categories:ProductHeaderCategory
})

export default ProductHeaderHome