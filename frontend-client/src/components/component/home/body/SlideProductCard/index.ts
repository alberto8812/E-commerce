import SlideProductImg from './SlideProductImg';
import SlideProductPuntuation from './SlideProductPuntuation';
import SlideProductTitle from './SlideProductTitle';
import SlideProductPrice from './SlideProductPrice';
import {SlideProductBody as SlideProductBodyHOC} from './SlideProductBody';
import { slideProductHOCProps } from '../../../../../interfaces/interfaces';


export {SlideProductPrice} from "./SlideProductPrice";
export {SlideProductImg} from './SlideProductImg';
export {SlideProductPuntuation} from './SlideProductPuntuation';
export {SlideProductTitle} from './SlideProductTitle';


export const SlideProductBody:slideProductHOCProps=Object.assign(SlideProductBodyHOC,{
    Img:SlideProductImg,
    Score:SlideProductPuntuation,
    Title:SlideProductTitle,
    Price:SlideProductPrice
})
    export default SlideProductBody;