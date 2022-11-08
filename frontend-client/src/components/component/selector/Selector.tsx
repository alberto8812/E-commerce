import React from 'react'
import './Selector.scss'
const Selector = () => {
  return (
    <div className='ContainerSelector'>
        <nav  className='ContainerSelector__nav'>
            
            <ul  className='ContainerSelector__nav-ul'>
                <li>
                    <a href='#'>TV</a>
                    <ul>
                      <li><a href='#'></a>a2</li>
                          <li><a href='#'></a>a3</li>
                          <li><a href='#'></a>a4</li>
                          <li><a href='#'></a>a5</li>
                          <li><a href='#'></a>a7</li>
                    </ul>
                </li>

                <li><a href='#'>Celulares</a>
                    <ul>
                            <li><a href='#'></a>a2</li>
                            <li><a href='#'></a>a3</li>
                    </ul>
                </li>
                
               
            </ul>
        </nav>
    </div>
  )
}

export default Selector