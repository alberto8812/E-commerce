import React, { useEffect } from 'react'
import { UseAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Chat from '../component/chatBot/Chat';
import './styles/Home.scss'
import { ProductCardHome, ProductCardImg } from '../component/ProductCardHome';
import { productsHome } from "../data/Producto";


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
        <div>
          <h1>WORLD SHOP</h1>
        </div>
      </header>

      <body className='app__navbar-body'>

       {productsHome.map(product=>(
          <ProductCardHome
            key={product.title}
            product={product}
             >
            <ProductCardImg/>
            
          </ProductCardHome>
        ))}

        <Chat/>

      </body>
      <footer className='app__navbar-footer'>footer</footer>
    </div>
  )
}

export default Home