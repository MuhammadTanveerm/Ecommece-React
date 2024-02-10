import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import { Container, Row,Col, Button, Card,Form,Accordion } from 'react-bootstrap';

import { FaRegHeart , FaCartPlus,FaEye} from "react-icons/fa";
import Slider from 'react-infinite-logo-slider'
import brand1 from '../assets/img/brand_01.png'
import brand2 from '../assets/img/brand_02.png'
import brand3 from '../assets/img/brand_03.png'
import brand4 from '../assets/img/brand_04.png'

const Shop = () => {
  const { prouduct} = useSelector((state) => state.feactureData)
  const [category, setcategory] = useState(prouduct)
  const categoryType = (gender) =>{

    setcategory(
      category.filter((item) =>{
        return item.gender == gender
        
      },
      setcategory(prouduct)
    ))
    
  }
  return (
    <>
    <Container className="shop-section">
  <Row>
    <Col md={3} className=''>
      <h4 className='mt-3'>Categories</h4>
    <Accordion className="mt-md-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Product</Accordion.Header>
        <Accordion.Body>
        <div>Male</div>
        <div>FeMale</div> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sale</Accordion.Header>
        <Accordion.Body>
        <div>Sport</div>
        <div>Luxury</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Product</Accordion.Header>
        <Accordion.Body>
        <div>Shoes</div>
        <div>Sweatrs </div>
        <div>Sunglasses</div> 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
    <Col md={9}>
      <Row className="my-3">
        <Col md={6}> <Button className="cate-search" onClick={() => setcategory(prouduct)} >All</Button>
        <Button className="cate-search"onClick={() => categoryType('male')}  >Men's</Button>
        <Button className="cate-search"onClick={() => categoryType('female')} >Women's</Button> </Col>
      <Col md={6}>
      <Form>
      <Form.Group className="mb-1" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Feactured" />
        
      </Form.Group></Form>
      </Col>
      </Row>
      <Row className="my-0">

        {
// prouduct.filter((product) =>{
//   if( product.gender === 'female'){
// return product
//   }
// })
category.map((product , index) => (
  
  <Col md={4} className="my-3">
  <Card  key={index}>
    <div className="overlay">
<Card.Img  className='image' variant="top" src={product.image} />
<div className="middle">
    <Link to={`/view/${product.id}` } className="text my-1"><FaRegHeart /> </Link>
    <Link to="/view" className="text my-1"><FaCartPlus /></Link>
    <Link to="/view" className="text my-1"> <FaEye /></Link>
    
  </div>
  </div>
<Card.Body>
  <Card.Title>{product.name}</Card.Title>
  <Card.Title>{product.size}</Card.Title>
  <Card.Text>
    {product.rating}
  </Card.Text>
  <Card.Text>
    {product.price}
  </Card.Text>
  
</Card.Body>
</Card>
    </Col>
))
        }
       
        </Row>
    </Col>
  </Row>
</Container>

 {/* Brand section */}
<section className="brand">
  <Container>
  <h1 className="text-center">Our Brands</h1>
  <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
    sed do eiusmod Lorem ipsum dolor sit amet.</p>
    <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
            margin="1rem 0rem"
        >
            <Slider.Slide>
                <img src={brand1} alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={brand2} alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={brand3} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={brand4} alt="any3" className='w-36' />
            </Slider.Slide>
            
        </Slider>
  </Container>
</section>

</>
  )
}

export default Shop