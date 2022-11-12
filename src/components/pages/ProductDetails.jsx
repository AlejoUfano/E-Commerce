import React, { useState, useRef } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../../assets/data/products'
import Helmet from '../organisms/Helmet/Helmet'
import CommonSection from '../../UI/CommonSection'
import '../../styles/productDetails.css'
import { motion } from 'framer-motion'
import ProductList from '../../UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const [tab, setTab] = useState('desc')
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch()
  const [rating, setRating] = useState(null)
  const {id} = useParams()
  console.log(id)
  const product = products.find(item=>item.id===id)
  console.log(products);
  const {imgUrl, productName, price, shortDesc, category, avgRating, reviews, description } = product 
  const relatedProducts = products.filter(item=>item.category===category)
  const submitHandler = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value
  }
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    }))
    toast.success('Product added successfully')
  }
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg='6'>
              <div className="productDetails">
                <h2>{productName}</h2>
                <div className='productRating d-flex align-items-center gap-5 mb-3'>
                  <div>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-half-s-line"></i></span>
                  </div>
                  <p>(<span>{avgRating}</span>) Rating</p>
                </div>
                <div className='d-flex align-items-center gap-5'>
                  <span className='productPrice'>${price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>
                <p className='mt-3'>{shortDesc}</p>
                <motion.button whileTap={{scale:1.2}} className="buyButton" onClick={addToCart}>Add to Cart</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tabWrapper d-flex align-items-center gap-5">
                <h6 className={`${tab==='desc' ? 'activeTab' : ''}`} onClick={()=>setTab('desc')}>Description</h6>
                <h6 className={`${tab==='rev' ? 'activeTab' : ''}`} onClick={()=>setTab('rev')}>Reviews ({reviews.length})</h6>
              </div>
              {
                tab==='desc' 
                ?
                  <div className="tabContent mt-5">
                    <p>{description}</p>
                  </div>
                : 
                  <div className='productReview mt-5'>
                    <div className="reviewWrapper">
                      <ul>
                        {
                          reviews?.map((review,index)=>(
                            <li key={index} className='mb-4'>
                              <h6>Kayle Miller</h6>
                              <span>{review.rating} (Rating)</span>
                              <p>{review.text}</p>
                            </li>
                          ))
                        }
                      </ul>
                      <div className="reviewForm">
                      <h4>Leave your experience</h4>
                        <form action="" onSubmit={submitHandler}>

                          <div className="formGroup">
                            <input type="text" placeholder='Enter name' ref={reviewUser}/>
                          </div>

                          <div className="formGroup d-flex align-items-center gap-5">
                            <span onClick={()=>setRating(1)}>1<i class="ri-star-s-fill"></i></span>
                            <span onClick={()=>setRating(2)}>2<i class="ri-star-s-fill"></i></span>
                            <span onClick={()=>setRating(3)}>3<i class="ri-star-s-fill"></i></span>
                            <span onClick={()=>setRating(4)}>4<i class="ri-star-s-fill"></i></span>
                            <span onClick={()=>setRating(5)}>5<i class="ri-star-s-fill"></i></span>
                          </div>

                          <div className="formGroup">
                            <textarea rows={4} type="text" placeholder='Review message...' ref={reviewMsg}/>
                          </div>

                          <button type='submit' className="buyButton">Submit</button>

                        </form>
                      </div>
                    </div>
                  </div> 
              }
             
            </Col>
            <Col lg='12' className='mt-5'>
              <h2 className="relatedTitle">
                You might also like
              </h2>
            </Col>
            <ProductList data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails