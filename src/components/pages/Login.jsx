import React, { useState } from 'react'
import Helmet from '../organisms/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Login</h3>
              <Form className='authForm'>
                <FormGroup className='formGroup'>
                <input type="email" placeholder='Enter your email'value={email} onChange={e=> setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className='formGroup'>
                <input type="text" placeholder='Enter your password' value={password} onChange={e=> setPassword(e.target.value)} />
                </FormGroup>
                <button type='submit' className="buyButton authButton">Login</button>
                <p>Don't have an account? <Link to='/signup' style={{ textDecoration: 'none' }}>Sign Up</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login