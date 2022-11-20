import React, { useState } from 'react'
import Helmet from '../organisms/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/login.css'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { setDoc, doc } from 'firebase/firestore'
import { storage } from '../../firebase.config'
import { db } from '../../firebase.config'
import { toast } from 'react-toastify'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const user = userCredential.user 

      const userCredential = await createUserWithEmailAndPassword(auth,email,password)
      const storageRef = ref(storage, `images/${Date.now() + username}`)
      const uploadTask = uploadBytesResumable(storageRef, file)        
      uploadTask.on((error)=>{
        toast.error(error.message)
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
         await updateProfile(user,{
            displayName: username,
            photoURL: downloadURL,
          })
          await setDoc(doc(db,'users', user.uid),{
            uid: user.uid,
            displayName: username,
            email,
            photoURL: downloadURL
          })
        })
      })
    } catch (error) {
      toast.error('Somethig went wrong')
    }
  }
  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Signup</h3>
              <Form className='authForm' onSubmit={signup}>
                <FormGroup className='formGroup'>
                <input type="text" placeholder='Enter your email'value={username} onChange={e=> setUsername(e.target.value)} />
                </FormGroup>
                <FormGroup className='formGroup'>
                <input type="email" placeholder='Username'value={email} onChange={e=> setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className='formGroup'>
                <input type="text" placeholder='Enter your password' value={password} onChange={e=> setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup className='formGroup'>
                <input type="text" placeholder='Enter your password' value={password} onChange={e=> setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup className='formGroup'>
                <input type="file" onChange={e=> setFile(e.target.files[0])} />
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