import React from 'react'
import './Navbar.scss'
import logo from "../../../images/logo.jpg";
const Navbar = () => {
  return (
    <div className='container__Navbar'>
      <div className='container__Navbar-search'>
        <div  className='Navbar__search-imagen'>

          <img  src={logo} alt='logo' />
        </div>
        <div className='Navbar__search-input'>
        <label className='search__input-information' >information</label>
        <div className='search__input-search'>
          <input />
          <label>imagen</label>
        </div>
        <div className='search__input-link'>
          <span>icon1</span>
          <span>icon2</span>
        </div>
        </div>
        
      </div>
      <div className='container__Navbar-list'>list</div>
    </div>
  )
}

export default Navbar