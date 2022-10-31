

import React, { useState, useEffect } from 'react'
import Helmet from '../organisms/Helmet/Helmet'
import Services from '../../services/Services.jsx'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroImg from '../../assets/images/hero-img.png'
import '../../styles/home.css'
import ProductsList from '../../UI/productsList'
import products from '../../assets/data/products'

const Home = () => {
  const [data, setData] = useState(products)
  const year = new Date().getFullYear()
  useEffect(()=>{
    const filteredProducts = products.filter((item) => item.category === 'Chair') 
    setData(filteredProducts)
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
            <ProductsList data={ data }/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home