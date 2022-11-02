

import React, { useState, useEffect } from 'react'
import Helmet from '../organisms/Helmet/Helmet'
import Services from '../../services/Services.jsx'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroImg from '../../assets/images/hero-img.png'
import '../../styles/home.css'
import ProductsList from '../../UI/ProductsList.jsx'
import products from '../../assets/data/products'
import counterImg from '../../assets/images/counter-timer-img.png'
import Clock from '../../UI/Clock.jsx'

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const year = new Date().getFullYear()
  useEffect(()=>{
    const filteredTrendingProducts = products.filter((item) => item.category === 'chair')
    const filteredBestSalesProducts = products.filter((item) => item.category === 'sofa')
    const filteredMobileProducts = products.filter((item) => item.category === 'mobile')  
    const filteredWirelessProducts = products.filter((item) => item.category === 'wireless')  
    const filteredPopularProducts = products.filter((item) => item.category === 'watch')  
    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)
  },[])
  return (
    <Helmet title={'Home'}>
      <section className="heroSection">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="heroContent">
                <p className="heroSubtitle">
                  Trending product in {year}
                </p>
                <h2>
                  Make Your Interior More Minimalistic & Modern
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod natus placeat error nostrum, beatae dicta qui soluta numquam debitis inventore earum quas labore ipsum consectetur delectus neque exercitationem nulla.
                </p>
                <motion.button whileTap={{scale: 1.2}} className="buyButton"><Link style={{textDecoration: 'none', color: '#fff                           '}} to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="heroImg">
                <img src={heroImg} alt="img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trendingProducts">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="sectionTitle">
                Trending Products
              </h2>
            </Col>
            <ProductsList data={ trendingProducts }/>
          </Row>
        </Container>
      </section>
      <section className="bestSales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="sectionTitle">
                Best Sales
              </h2>
            </Col>
            <ProductsList data={ bestSalesProducts }/>
          </Row>
        </Container>
      </section>
      <section className="timerCount">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="clockTopContent">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{scale:1.2}} className="buyButton storeButton">
                <Link to='/shop' style={{textDecoration: 'none'}}>
                  Visit Store
                </Link>
              </motion.button>
            </Col>
            <Col lg='6' md='6' className='text-end'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="newArrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="sectionTitle">
                New Arrivals
              </h2>
            </Col>
            <ProductsList data={ mobileProducts }/>
            <ProductsList data={ wirelessProducts }/>
          </Row>
        </Container>
      </section>
      <section className="popularCategory">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="sectionTitle">
                Popular in category
              </h2>
            </Col>
            <ProductsList data={ popularProducts }/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home