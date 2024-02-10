import React from 'react'
import {Container,Row,Col, Image } from 'react-bootstrap'
import { GrDeliver } from "react-icons/gr";
import { GoArrowSwitch } from "react-icons/go";
import { MdOutlinePercent } from "react-icons/md";
import {  FaUser } from "react-icons/fa";
import Slider from 'react-infinite-logo-slider'

import brand1 from '../assets/img/brand_01.png'
import brand2 from '../assets/img/brand_02.png'
import brand3 from '../assets/img/brand_03.png'
import brand4 from '../assets/img/brand_04.png'
import brand from '../assets/img/about-hero.svg'
const About = () => {
  return (
    <>

<section className="about-section">
    <Container className="about">
        <Row>
            <Col md={8} className='px-auto'>
              <div className='about-box '>
          <div> <h1>About  Us</h1> </div>
               <div>
     <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Perspiciatis ea ab voluptate eos illo ex nam earum dignissimos 
adipisci rem provident ducimus,
 eligendi nobis vero est esse minus enim? Distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Perspiciatis ea ab voluptate eos illo ex nam earum dignissimos 
adipisci rem provident ducimus,
 eligendi nobis vero est esse minus enim? D
 istinctio.</p>
               </div>
           
              
              </div>
              </Col>

            <Col md={4}> 
            
            <Image src={brand} alt='no iamg' />
            </Col>
        </Row>

    </Container> 
</section>

<section className='service-section'>
    <Container>
    <h2 className='text-center mb-3'>Our Services</h2>
    <p className='text-center mb-3 mx-md-5'> Lorem ipsum dolor sit, amet 
    consectetur adipisicing elit. Qui cumque assumenda dicta perspiciatis
     consequuntur velit dolore, molestias possimus aliquid sequi fuga rem 
     ipsa doloremque! Eveniet tenetur corrupti, voluptates aperiam ratione 
     simpedit facilis dolore beatae dolor nemo
     eligendi quam dolorem voluptate.</p>
     <Row>
        <Col md={3} sm={6}>
            <div className="service-box text-center">
                <GrDeliver className='service-icon mb-3' />
                <h5>Services Delivery</h5>
            </div>
        </Col>
        <Col md={3} sm={6}>
            <div className="service-box text-center">
                <GoArrowSwitch className='service-icon mb-3' />
                <h5>Shipping & Return</h5>
            </div>
        </Col>
        <Col md={3} sm={6}>
            <div className="service-box text-center">
             < MdOutlinePercent  className='service-icon mb-3' /> 
                <h5>Promotion </h5>
            </div>
        </Col>
        <Col md={3} sm={6}>
            <div className="service-box text-center">
                <FaUser  className='service-icon mb-3' />
                <h5>24 Hours Service</h5>
            </div>
        </Col>
     </Row>
    </Container>

</section>
{/* Brand section */}
<section className="brand">
  <Container>
  <h1 className="text-center">Our Brands</h1>
  <p className='text-center my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
    sed do eiusmod Lorem ipsum dolor sit amet.</p>
    <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
            className=""
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

export default About