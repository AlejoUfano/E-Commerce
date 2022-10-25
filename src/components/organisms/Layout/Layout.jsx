import React from 'react'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import Routers from '../../../routers/Routers.js'

const Layout = () => {
  return (
    <>
        <Header />
        <div>
            <Routers />
        </div>
        <Footer />
    </>
  )
}

export default Layout