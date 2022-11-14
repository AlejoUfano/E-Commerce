import React from 'react'
import CommonSection from '../../UI/CommonSection'
import Helmet from '../organisms/Helmet/Helmet'
import '../../styles/cart.css'
import { Container, Row, Col } from 'reactstrap'
import tdImg from '../../assets/images/arm-chair-01.jpg'
import { motion } from 'framer-motion'
import { cartActions } from '../../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td><img src={tdImg} alt="" /></td>
                      <td>Modern Arm Chair</td>
                      <td>$299</td>
                      <td>2u</td>
                      <td><i class="ri-delete-bin-line"></i></td>
                    </tr>
                </tbody>
              </table>
            </Col>
            <Col lg='3 '></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Cart