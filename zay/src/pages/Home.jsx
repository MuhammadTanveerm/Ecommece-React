import React from 'react'
import { Card , Row, Col,Container,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import slide1 from '../assets/img/banner_img_01.jpg';
import slide3 from '../assets/img/banner_img_03.jpg';
import cate1 from '../assets/img/category_img_01.jpg';
import cate2 from '../assets/img/category_img_02.jpg';
import cate3 from '../assets/img/category_img_03.jpg';
import { useSelector } from 'react-redux';

import { Carousel } from 'react-bootstrap';

const Home = () => {
  const {  feacutre} =useSelector((state) => state.feactureData)
  console.log(  feacutre)
  return (
    <>
   <section className='slider-section  fluid'>
    <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <Container className="d-flex justify-content-between slide-box">
              <Row>
                <Col md={6}>
                  {" "}
                  <div className="information-box ">
                    <h3> Zay eCommerce </h3>
                    <h4>Tiny and Perfect eCommerce Template</h4>
                    <p>
                      You are permitted to use this Zay CSS template for your
                      commercial websites. You are not permitted to
                      re-distribute the template ZIP file in any kind of
                      template collection websites. .
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  {" "}
                  <div>
                    <img
                      className="d-block w-100"
                      src={slide1}
                      alt="First slide"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className="d-flex justify-content-between slide-box">
              <Row>
                <Col md={6}>
                  {" "}
                  <div className="information-box ">
                    <h3>Zay eCommerce</h3>
                    <h4>Repr in voluptate </h4>
                    <p>
                      Zay Shop is an eCommerce HTML5 CSS template with latest
                      version o f Bootstrap 5 (beta 1). This template is 100%
                      free provided by TemplateMo website. Image credits go to
                      Freepik Stories, Unsplash and Icons 8.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <img
                      className="d-block w-100"
                      src={slide3}
                      alt="First slide"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className="d-flex justify-content-between slide-box">
              <Row>
                <Col md={6}>
                  {" "}
                  <div className="information-box ">
                    <h3>Zay eCommerce</h3>
                    <h4>Tiny and Perfect eCommerce Template</h4>
                    <p>
                      Zay Shop is an eCommerce HTML5 CSS template with latest
                      version o f Bootstrap 5 (beta 1). This template is 100%
                      free provided by TemplateMo website. Image credits go to
                      Freepik Stories, Unsplash and Icons 8.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  {" "}
                  <div>
                    <img
                      className="d-block w-100"
                      src={slide3}
                      alt="First slide"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
 

   </section>
   {/* /* Category of the month section */}
   <section className='category-section'>
<Container>
<h1 className='text-center'>Catergory of the Month</h1>
<p className='text-center'> Lorem ipsum dolor sit ametconsectetur adipisicing elit. Velit magni et eos dolorem quidemolores consequatur harum earum debitis a?</p>

<Row className="g-5 mx-5">
<Col md={4}>
 <Card className="text-center" >
                <Card.Img variant="top" src={cate1} />
                <Card.Body>
                  <Card.Title>Watches</Card.Title>

                  <Button variant="primary"> Go Shop</Button>
                </Card.Body>
              </Card>
</Col>
<Col md={4}>
 <Card className="text-center" >
                <Card.Img variant="top" src={cate3} />
                <Card.Body>
                  <Card.Title>  Accessories</Card.Title>

                  <Button variant="primary">Go Shop</Button>
                </Card.Body>
              </Card>
</Col>
<Col md={4}>

 <Card className="text-center" >
                <Card.Img variant="top" src={cate2} />
                <Card.Body>
                  <Card.Title>Shoes</Card.Title>

                  <Button variant="primary"> Go Shop</Button>
                </Card.Body>
              </Card>
</Col>

</Row>

</Container>
 </section>
{/* Feacturd Product section */}
<section className="feactured-product">
<Container>
<h1 className='text-center'> Feactured Product</h1>
<p className='text-center '> Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident.</p>
<Row>
  {
  feacutre.map((pro ) =>(
<Col  md={4} className="my-1  my-md-0"  key={pro._id}> <Card >
      <Card.Img  alt='No Preview' variant="top" src= {pro.image} />
      <Card.Body>
        <div className='d-flex  justify-content-between my-2'>
          <div className='star'>{pro.rating}</div>
          <div className='price'>{pro.price}</div>
        </div>
        <Card.Title>{pro.name}</Card.Title>
        <Card.Text>
         {pro.description}
        </Card.Text>
         <p  className='my-1'>Reviews {(pro.Review)}</p>
       
      </Card.Body>
    </Card>
    </Col>
  ))
  }

</Row>
</Container>
</section>
   </>
  )
}

export default Home