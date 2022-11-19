import React, { useState } from 'react'
import Helmet from '../organisms/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/login.css'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Signup</h3>
              <Form className='authForm'>
                <FormGroup className='formGroup'>
                <input type="email" placeholder='Enter your email'value={email} onChange={e=> setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className='formGroup'>
                <input type="text" placeholder='Enter your password' value={password} onChange={e=> setPassword(e.target.value)} />
                </FormGroup>
                <button type='submit' className="buyButton authButton">Create an account</button>
                <p>Already have an account? <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup