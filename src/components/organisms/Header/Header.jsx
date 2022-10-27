import React from 'react'
import './header.css'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import logo from '../../../assets/images/eco-logo.png'
import { NavLink } from 'react-router-dom'
import userIcon from '../../../assets/images/user-icon.png'
const navLinks = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  }
]

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="navWrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
                <h1>Since 1995</h1>
              </div>
            </div>
            <div className='navigation'>
              <ul className='menu'>
                {
                  navLinks.map((item,index)=>(
                    <li className='navItem' key={index}>
                      <NavLink 
                        to={item.path}
                        className={(navClass)=> navClass.isActive ? 'navActive' : ''}
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))
                }               
              </ul>
            </div>
            <div className="navIcons">

              <span className="favIcon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cartIcon">
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img whileTap={{scale: 1.2}} src={userIcon} alt="" />
              </span>

            </div>
            <div className="mobileMenu">
              <span><i class="ri-menu-line"></i></span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header