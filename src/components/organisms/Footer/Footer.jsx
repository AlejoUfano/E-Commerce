import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
              <div>
                <h1 className='text-white'>Multimart</h1>
              </div>
            </div>
            <p className="footerText mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nihil corporis cum aperiam exercitationem necessitatibus eum fugiat reprehenderit excepturi unde!
            </p>
          </Col>
          <Col lg='3'>
            <div className="footerQuickLinks">
              <h4 className="quickLinksTitle">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' style={{ textDecoration: 'none' }}>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' style={{ textDecoration: 'none' }}>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' style={{ textDecoration: 'none' }}>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' style={{ textDecoration: 'none' }}>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
            <div className="footerQuickLinks">
              <h4 className="quickLinksTitle">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop' style={{ textDecoration: 'none' }}>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart' style={{ textDecoration: 'none' }}>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' style={{ textDecoration: 'none' }}>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
            <div className="footerQuickLinks">
              <h4 className="quickLinksTitle">Contact</h4>
              <ListGroup className='footerContact'>
                <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Bahia Blanca, Buenos Aires, Argentina</p>
                </ListGroupItem>
                <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+542914497480</p>
                </ListGroupItem>
                <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  <p>ufanoalejo@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footerCopyright">
              Copyright {year} developed by Alejo Ufano. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer