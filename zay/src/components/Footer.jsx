import React from 'react'
import { Container, Row, Col , Form, Button} from 'react-bootstrap'
import {FaLocationDot,  FaPhoneFlip, } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import {MdEmail} from "react-icons/md"
import {TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter} from "react-icons/ti"
const Footer = () => {
  return (

    <>
  
    <section className='footer-section'>
<Container>
<Row>
<Col md={4}>
      
          <ul>
          <div> <h2 id="zp">Zay Shop</h2></div> 
            <li><a href="#item1"><FaLocationDot className="footer-icon"/> 123 Consectetur at ligula 10660</a></li>
            <li><a href="#item2"><FaPhoneFlip className="footer-icon"/> 010-020-0340</a></li>
            <li><a href="#item3"><MdEmail className="footer-icon" />infoCompany@gmail.com</a></li>
          
          </ul>
        </Col>

        <Col md={4}>
         
          <ul>
            <div> <h2>Products</h2></div>
            <li><a href="#item6">Luxury</a></li>
            <li><a href="#item7">Sport Wear</a></li>
            <li><a href="#item8"> Men's Shoes</a></li>
            <li><a href="#item9">Women's Shoes</a></li>
            <li><a href="#item10">Popular Dress</a></li>
            <li><a href="#item10">Gym Accessories</a></li>
            <li><a href="#item10">Sport Shoes</a></li>
          </ul>
        </Col >

        <Col md={4}>
          
          <ul>
            <div><h2>Further Info</h2></div>
            <li><a href="#item11"> Home</a></li>
            <li><a href="#item12"> About Us </a></li>
            <li><a href="#item13">Shop Locations</a></li>
            <li><a href="#item14">FAQs</a></li>
            <li><a href="#item15">Contact</a></li>
          </ul>
        </Col>
      
</Row>

    <div className="footer-end  "> 
    <Row>
      <Col md={6}>
      <ul className='d-flex  '>
      <li>   <Link to="#item14"><TiSocialFacebook className="social-icons" /></Link> </li>
      <li>   <Link to="#item14"><TiSocialInstagram className="social-icons" /></Link> </li>
      <li>   <Link to="#item14"><TiSocialTwitter className="social-icons" /></Link> </li>
      <li>   <Link to="#item14"><TiSocialLinkedin className="social-icons" /></Link> </li>
      </ul>
      </Col>
      <Col md={6} className="">
      <Form className="d-flex ms-md-auto  w-75">
            <Form.Control
              type="search"
              placeholder="Email Address"
              className=" "
              aria-label="Search"
            />
            <Button variant="">Subscribe</Button>
          </Form>
      </Col>
    </Row>
    </div> 
</Container>

    </section>
    </>
  )
}

export default Footer