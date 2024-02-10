import React, { useEffect,useState } from 'react'
import { Container ,Row,Col, Button, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { FaRegHeart, FaCartPlus, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { addToCart } from '../feactures/productslice';
const Viewproduct = () => {
    const dispatch = useDispatch();
    const { id }   = useParams();
    const [data, setData] =useState({});
    const { prouduct} = useSelector((state) => state.feactureData)
   
    
   
   
  useEffect(() => {
  if(id){
    const single = prouduct.filter((ele) => ele.id == id)
    setData(single[0])
    console.log(single)
  }
    
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <section className='view-section'>
 <Container className=" view-box " >

<Row className="">
<Col md={5} >

<div className='image-box'>
<img src={data.image} alt="photo" className="img-fluid imga "/>

</div>
</Col>
<Col md={7}>
<div className="detail-box">
<h3>{data.name}</h3>

<h5>{data.price}</h5>
<h6>{data.rating}</h6>
<h3>Brand: {data.brand}</h3>
<h3>Description</h3>
<p>{data.description}</p>
<h4>Avaliable Color: {data.color}</h4>
<h6>Specification:</h6>
{data.specification}
<div className="measure-box d-md-flex my-md-0 ">
<div className="d-flex my-2 my-md-0 size align-items-center pe-4"> Size:
<div className="btn">S</div>
<div className="btn">M</div>
<div className="btn">L</div>
<div className="btn"> XL</div>
</div>
<div>
Quantity: <Button className='btn'>-</Button >0<Button className='btn'>+</Button>
</div>

</div>
<div className="d-flex d-grid">
<Button className="btn ">Buy</Button>
{/* <Button claaName="btn " onClick={()=> dispatch(addToCart(data))}>Add to Card</Button> */}
</div>
</div>

</Col>
</Row>

</Container>
    </section>
    <section className='shop-section py-5'>
      
 
       <Container className="py-3">
<h3 className='my-4'>Related Products</h3>
        <div className='slider-container '>
        <Slider {...settings}>
      {
        prouduct.map((product , index) => (
          <Card  key={index} className=''>
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
        ))
      }
    </Slider>
        </div>
       </Container>
    </section>
    </>

  
  ) 
}

export default Viewproduct