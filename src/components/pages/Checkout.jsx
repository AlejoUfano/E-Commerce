import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../organisms/Helmet/Helmet'
import CommonSection from '../../UI/CommonSection.jsx'
import '../../styles/checkout.css'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)
  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing information</h6>
              <Form className='billingForm'>
                <FormGroup className='formGroup'>
                  <input type="text" placeholder='Enter your name'/>
                </FormGroup>
                <FormGroup className='formGroup'>
                  <input type="email" placeholder='Enter your email'/>
                </FormGroup>
                <FormGroup className='formGroup'>
                  <input type="number" placeholder='Phone number'/>
                </FormGroup>
                <FormGroup className='formGroup'>
                  <input type="text" placeholder='Street adress'/>
                </FormGroup>
                <FormGroup className='formGroup'>
                  <input type="text" placeholder='City'/>
                </FormGroup>
                <FormGroup className='formGroup'>
                  <input type="text" placeholder='Postal code'/>
                </FormGroup>
                <FormGroup className='formGroup'>
                  <input type="text" placeholder='Country'/>
                </FormGroup>
              </Form>
            </Col>                         
            <Col lg='4'>
            <div className="checkoutCart">
                <h6>Total Qty: <span>{totalQty} items</span></h6>
                <h6>Subtotal: <span>${totalAmount}</span></h6>
                <h6>
                  <span>
                    Shipping: <br />
                    Free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>Total cost: <span>${totalAmount}</span></h4>
                <button className="buyButton authButton w-100">Place an order</button>
              </div>  
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout