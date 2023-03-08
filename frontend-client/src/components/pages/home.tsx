import React, { useEffect } from 'react'
import { UseAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Chat from '../component/chatBot/Chat';
import '../../styles/Home-style.scss'
import { ProductCardHome, ProductCardImg,ProductCardTitle } from '../component/ProductCardHome';
import { productsHome,ProductsHeader,img } from "../data/Producto";
import ProductHeaderHome, { ProductHeaderCategory, ProductHeaderSlidesShow } from '../component/ProductHeader/index';
import { ProductFooterHome } from '../component/footer/ProductFooterHome';



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

        <Chat/>

      </body>
      <footer className='app__navbar-footer'>
        <ProductFooterHome/>


      </footer>
    </div>
  )
}

export default Home