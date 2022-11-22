import React, { useState } from 'react'
import Helmet from '../organisms/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link, Navigate } from 'react-router-dom'
import '../../styles/login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      setLoading(false)
      toast.success('Successfully logged in')
      navigate('/checkout')           
    } catch (error) {
      setLoading(false)
      toast.error(error.message)      
    }
  }
  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            {
              loading 
              ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Loading....</h5></Col>
              : <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Login</h3>
              <Form className='authForm' onSubmit={signIn}>
                <FormGroup className='formGroup'>
                <input type="email" placeholder='Enter your email'value={email} onChange={e=> setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className='formGroup'>
                <input type="password" placeholder='Enter your password' value={password} onChange={e=> setPassword(e.target.value)} />
                </FormGroup>
                <button type='submit' className="buyButton authButton">Login</button>
                <p>Don't have an account? <Link to='/signup' style={{ textDecoration: 'none' }}>Sign Up</Link></p>
              </Form>
            </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login