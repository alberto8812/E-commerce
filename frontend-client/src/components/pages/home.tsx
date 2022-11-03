import React, { useEffect } from 'react'
import { UseAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';




const Home = () => {
    const {getAllProducts}=UseAction()
    const {data}=useTypeSelector((state)=>state.repositories)
    console.log(data)
    useEffect(() => {
        getAllProducts()
    }, [])

  return (
    <div>home</div>
  )
}

export default Home