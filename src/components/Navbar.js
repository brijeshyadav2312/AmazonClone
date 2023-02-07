import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import {GoSearch} from 'react-icons/go'
import {SlLocationPin} from 'react-icons/sl'
import {GiHamburgerMenu} from 'react-icons/gi'
import logo from '../Assets/logo.PNG'
import flag from '../Assets/india.webp'
import '../css/navbar.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const totalCartProduct = useSelector(state => state)

  return (
    <div className='navbar'>
      <div className='navbarHead'>
        <Link to="/"><img src={logo} alt="logo" width="120px"/></Link>
        <div>
            <p>Hello</p>
            <p><SlLocationPin/> Select Your Address</p>
        </div>
        <div className='inputField'>
            <select>
                <option>All</option>
            </select>
            <input type='text' placeholder='Search Amazon.in'/>
            <span>
                <GoSearch/>
            </span>
        </div>
        <div>
            <img src={flag} alt="flag" width='25px'/>
            <span>EN</span>
        </div>
        <div>
            <p>Hello, sign in</p>
            <p>Account & Lists</p>
        </div>
        <div>
            <p>Returns</p>
            <p>& Orders</p>
        </div>
        <div>
          <Link to="/checkout">
            <FiShoppingCart/>
            <span>{totalCartProduct.Cart.length}</span>
          </Link>
        </div>
      </div>
      <div className='navbarFoot'>
        <span>
            <GiHamburgerMenu/>
            <span>All</span>
        </span>
        <span>Today's Deals</span>
        <span>Customer Service</span>
        <span>Registry</span>
        <span>Gift Cards</span>
        <span>Sell</span>
      </div>
    </div>
  )
}

export default Navbar
