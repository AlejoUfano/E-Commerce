import React from 'react'
import { Container } from 'reactstrap'
import '../styles/commonSection.css'

const CommonSection = ({title}) => {
  return (
    <section className="commonSection">
        <Container className='text-center'>
            <h1>{title}</h1>
        </Container>
    </section>
  )
}

export default CommonSection