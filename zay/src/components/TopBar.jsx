import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import '../index.css'
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaBell, FaShoppingCart, FaSearch } from 'react-icons/fa';
import logo from '../assets/img/apple-icon.png'
const TopBar = () => {
 
  // const [color,setColor]= useState({open})
  // Define styles dynamically based on the state
  return (
    <>
<section className="section-topbar ">

    <Navbar expand="lg" className="">
      <Container className='d-flex align-items-center' >
        <Navbar.Brand href="#"><img  src={logo}className='brand-img'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
          className=' m-md-auto '
          >
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About </Nav.Link>
            
            <Nav.Link as={Link} to="/shop" >
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" >
              Contact
            </Nav.Link>
          </Nav>
          
          <div className='ms-auto nav-right d-flex justify-content-md-end '>
        
          <Form className="d-flex d-block d-md-none">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="" className=' bg-success'>Search</Button>
          </Form>
          <button className=' d-md-block d-none 'to="#action1">
            < IoSearch/>  </button>
          <Nav.Link as={Link} className='' to="#action1"><FaShoppingCart/></Nav.Link>
            <Nav.Link as={Link} to="/about" className=''><FaBell/> </Nav.Link>
          </div>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>

</section>

 <div  className='search-ovelay '>
      <div className='toggleClass outer-class'> 
        <Link className='close'> <span></span></Link>

      </div>
  <Form className=" fullscreen-searchform">
            <Form.Control
              type="search"
              placeholder="Search"
              className="search-box "
              aria-label="Search"
            />
            
             <IoSearch className='nav-icons fullscreen-search-icon text-white' />
          </Form> 
      
        
    </div>
    </>
  )
}

export default TopBar