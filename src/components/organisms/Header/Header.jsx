import React, { useRef, useEffect } from 'react'
import './header.css'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import logo from '../../../assets/images/eco-logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import userIcon from '../../../assets/images/user-icon.png'
import { useSelector } from 'react-redux'
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
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', ()=>{
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('stickyHeader')
      } else {
        headerRef.current.classList.remove('stickyHeader')
      }
    })
  }
  const navigateToCart = () => {
   navigate('/cart')
  }
  useEffect(()=>{
    stickyHeaderFunc()
    return ()=> window.removeEventListener('scroll', stickyHeaderFunc)
  },[])
  const menuToggle = () => menuRef.current.classList.toggle('activeMenu')
  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="navWrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
            <div className='navigation' ref={menuRef} onClick={menuToggle}>
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
                <span className="badge">2</span>
              </span>
              <span className="cartIcon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img whileTap={{scale: 1.2}} src={userIcon} alt="" />
              </span>
              <div className="mobileMenu">
                <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
              </div>
            </div>  

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header