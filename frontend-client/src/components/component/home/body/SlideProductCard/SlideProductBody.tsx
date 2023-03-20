
import { ProductBodySlider, ProductContextBodySliderProps, slideProductHOCProps } from '../../../../../interfaces/interfaces'
import { ReactElement,createContext } from 'react';


export const ProductContextsliderBody = createContext({} as ProductContextBodySliderProps);
const {Provider}                      = ProductContextsliderBody;


export interface props{
    product:ProductBodySlider;
    children?:ReactElement | ReactElement[],
    className:string[]
}


export const SlideProductBody = ({children,product,className}:props) => {
  return (
    <Provider value={{
        product,
      }}>
        <div className={className[0]}>
            <div className={className[1]}>
             {children}
            </div>
        </div>
    </Provider>
  )
}


export default SlideProductBody