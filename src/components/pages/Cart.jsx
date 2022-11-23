import React, { useEffect } from 'react'
import CommonSection from '../../UI/CommonSection'
import Helmet from '../organisms/Helmet/Helmet'
import '../../styles/cart.css'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = useSelector(state=>state.cart.cartItems)
  const totalAmount = useSelector(state=>state.cart.totalAmount)
  useEffect(()=>{
  },[cartItems])
  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length===0 
                ? 
                <h2 className='fs-4 text-center'>No items added to the cart</h2> 
                :(
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
                      {
                        cartItems.map((item,index)=>(
                          <Tr item={item} key={index}/>
                        ))
                      }
                    </tbody>
                  </table>
                )
              }              
            </Col>
            <Col lg='3 '>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>
                  Subtotal
                  <span className='fz-4 fw-bold'>${totalAmount}</span>
                </h6>                
              </div>
              <p className='fs-6 mt-2'>Taxes and shipping will be calculated at checkout.</p>
              <div className='cartButtons'>

              <button className="buyButton w-100 text-white">
                  <Link to='/checkout' className='text-white' style={{ textDecoration: 'none' }}>Checkout</Link>
                </button>

                <button className="buyButton w-100">
                  <Link to='/shop' className='text-white' style={{ textDecoration: 'none' }}>Continue shopping</Link>
                </button>
                 
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({item}) => {
  const dispatch = useDispatch()
  const removeProduct = () => {
    dispatch(cartActions.removeItem(item.id))
  }
  return(                       
  <tr>
    <td><img src={item.imgUrl} alt=""/></td>
    <td>{item.productName}</td>
    <td>{item.price}</td>
    <td>{item.quantity}</td>
    <td><motion.i class="ri-delete-bin-line" whileTap={{scale: 1.2}} onClick={removeProduct}></motion.i></td>
  </tr>
  ) 
}
export default Cart