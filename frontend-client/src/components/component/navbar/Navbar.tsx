import React from 'react'
import './Navbar.scss'
import logo from "../../../images/logo.png";
import { BsSearch,BsCart } from 'react-icons/bs'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Selector from '../selector/Selector';



const Navbar = () => {
  return (
    <div className='container__Navbar'>
      <div className='container__Navbar-search'>
        <div  className='Navbar__search-imagen'>

          <img  src={logo} alt='logo' />
        </div>
        <div className='Navbar__search-input'>
        <label className='search__input-information' >
          <ul>
            <li>Televentas:</li>
            <li>Atencion al cliente</li>
            <li>Tiendas</li>
            <li>Catalogo</li>
            <li>PQR</li>
          </ul>
        </label>
        <div className='search__input-search'>
          <div>
          <input />
          <div>
          <BsSearch className='search__input-search-icon'/>
          </div>
          </div>
        </div>
        <div className='search__input-link'>
          <div>
           
              <Avatar alt="Remy Sharp" />
              <label>Mi cuenta</label>
           
          </div>
          <div><BsCart  className='signup_BsSearch'/> </div>
        </div>
        </div>
        
      </div>
      <div className='container__Navbar-list'>
       <label className='Navbar__list-selector' >
        <Selector/>
        
        </label>
      </div>
    </div>
  )
}

export default Navbar