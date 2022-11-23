import React, { useRef, useEffect } from 'react'
import './header.css'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import logo from '../../../assets/images/eco-logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import userIcon from '../../../assets/images/user-icon.png'
import { useSelector } from 'react-redux'
import useAuth from '../../../customHooks/useAuth'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase.config'
import { toast } from 'react-toastify'
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
  const { currentUser } = useAuth()
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const profileActionRef = useRef(null)
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
  const logout = () => {
    signOut(auth).then(()=>{
      toast.success('Logged out')
      navigate('/home')
    }).catch(err => {
      toast.error(err.message )
    })
  }
  useEffect(()=>{
    stickyHeaderFunc()
    return ()=> window.removeEventListener('scroll', stickyHeaderFunc)
  },[])
  const menuToggle = () => menuRef.current.classList.toggle('activeMenu')
  const toggleProfileActions = () => {
    profileActionRef.current.classList.toggle('showProfileActions')
  } 
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
                <span className="badge">0</span>
              </span>
              <span className="cartIcon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className='profile'>
                <motion.img 
                  whileTap={{scale: 1.2}} 
                  src={currentUser ? currentUser.photoURL : userIcon} 
                  alt="" 
                  onClick={toggleProfileActions}                  
                />
                <div className="profileActions" ref={profileActionRef} onClick={toggleProfileActions}>
                  {
                    currentUser 
                    ? <span onClick={logout}>Logout</span> 
                    : <div className='d-flex align-items-center justify-content-center flex-column'>
                        <Link to='signup' style={{ color: '#fff'}}>Signup</Link>
                        <Link to='login' style={{ color: '#fff'}}>Login</Link>
                      </div>
                  }
                </div>
              </div>
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