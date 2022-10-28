

import React from 'react'
import Helmet from '../organisms/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../assets/images/hero-img.png'

const Home = () => {
  const year = new Date().getFullYear()
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
                <button className="buyButton">SHOP NOW</button>
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
    </Helmet>
  )
}

export default Home