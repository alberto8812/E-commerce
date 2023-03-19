import React, { useEffect } from 'react'
import { UseAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Chat from '../component/chatBot/Chat';
import '../../styles/Home-style.scss'
import { ProductCardHome, ProductCardImg,ProductCardTitle } from '../component/home/body/ProductCardHome';
import { productsHome,ProductsHeader,img,slidebodyProduct } from "../data/Producto";
import ProductHeaderHome,{ ProductHeaderCategory, ProductHeaderSlidesShow } from '../component/home/header/ProductHeader/index';
import { ProductFooterHome } from '../component/home/footer/ProductFooterHome';
import Carousel from "react-material-ui-carousel";
import {SlideProductBody, SlideProductImg, SlideProductPrice, SlideProductPuntuation,SlideProductTitle} from '../component/home/body/SlideProductCard/index';




const Home = () => {
    const {getAllProducts}=UseAction()
    const {data}=useTypeSelector((state)=>state.repositories)
    console.log(data)
    useEffect(() => {
        getAllProducts()
    }, [])






  return (
    <div className='app__navbar'>
      <header className='app__navbar-header'>
        <ProductHeaderHome
          product={ProductsHeader}
          img={img}
          ClassName="ProductHeaderHome"
        >

          <ProductHeaderCategory className='ProductHeaderCategory'/>
          <ProductHeaderSlidesShow className='ProductHeaderSlidesShow'/>
          
        </ProductHeaderHome>
        
      </header>

      <body className='app__navbar-body'>

      {/**
       * mean producto presentation
       * only include rute,title and image
       */}
           {productsHome.map(product=>(
             <ProductCardHome
               key={product.title}
                 product={product}
                 className={'app_productCardHome'}
                >
              <ProductCardTitle className='app_productCardTitle' />
              <ProductCardImg className='app_productCardImg'/>
                  
              </ProductCardHome>
             ))}
    
    
    <Carousel>

    {slidebodyProduct.map(product=>(
      <SlideProductBody        
      className={'app_productCardHome'}
      product={product}
      >
       <SlideProductImg/>
       <SlideProductPrice/>
       <SlideProductPuntuation/>
       <SlideProductTitle/>
      </SlideProductBody>
      ))}
    </Carousel>
        <Chat/>

      </body>
      <footer className='app__navbar-footer'>
        <ProductFooterHome/>


      </footer>
    </div>
  )
}

export default Home