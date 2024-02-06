import React from 'react'
import './Navbar.css'
import photo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
      <div className="collection">
        
        <NavLink className='link__item' to={"/"}>
          <li className='nav__item1'>
            <img src={photo} alt="" />
          </li>
        </NavLink>
        <NavLink to={"/sale"}>
          <li className='nav__item'>
            <h3 className='nav_h'>Sale</h3>
          </li>
        </NavLink>
        <NavLink to={"/ShopBy"}>
          <li className='nav__item'>
            <h3 className='nav_h'>Shop by category</h3>
          </li>
        </NavLink>
        <NavLink to={"/Shopbyplatform"}>
          <li className='nav__item'>
            <h3 className='nav_h'>Shop by platform</h3>
          </li>
        </NavLink>
        <NavLink to={"/support"}>
          <li className='nav__item'>
            <h3 className='nav_h'>Support</h3>
          </li>
        </NavLink>
        <div className="menu">
          <div className="bars"></div>
          <br />
          <div className="bars"></div>
          <br />
          <div className="bars"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar