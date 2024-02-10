import React from 'react'
import {Container, Form , Col , Row, Button} from 'react-bootstrap'
const Contact = () => {
  return (
    <>
   <section  className='contact-section'>
    
  
    <Container>
    < h1 className='text-center'>Contact Us</h1>
    <p className='text-center'>Proident, sunt in culpa qui officia deserunt mollit anim
       id est laborum. Lorem ipsum dolor sit amet.</p>
      
    </Container>
    </section> 
<section className='section-form'>

<Container>

  <Row className=''>
    <Col md={9} className='m-auto'>
      
      
        <Form> 
        <Row className=''> 
          <Col md={6}> 
       <Form.Group   className="mb-4 " controlId="exampleForm.Co">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      </Col > 
     <Col md={6}> 
      <Form.Group   className="mb-4 " controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder=" Email " />
      </Form.Group>
      </Col> 
      <Form.Group   className="mb-4 " controlId="exampleForm.ControlInput1">
        <Form.Label>Subject </Form.Label>
        <Form.Control type="text" placeholder="Subject" />
      </Form.Group>
      </Row>
      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Message' />
      </Form.Group>
      <Form.Group className='d-flex justify-content-end'>
      <Button>Let's Talk</Button>
      </Form.Group>
    
    </Form>
    
    </Col>
   
    </Row>
</Container>
</section>
    </>
  )
}

export default Contact