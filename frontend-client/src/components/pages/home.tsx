import React, { useEffect } from 'react'
import { UseAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import './styles/Home.scss'



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
      <div>header</div>
      </header>
      <body className='app__navbar-body'>
        <div>body</div>
        <div>body</div>
        <div>body</div>
        <div>body</div>
      </body>
      <footer className='app__navbar-footer'>footer</footer>
    </div>
  )
}

export default Home