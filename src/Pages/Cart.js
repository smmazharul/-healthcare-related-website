import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import Zoom from 'react-reveal/Zoom';

import Slide from 'react-reveal/Zoom';
const Cart = () => {
    const {selectedService}=useAuth()
    return (
        <div className='cart'>
                    <Container className="mt-5">
                        {selectedService.map(({img,title,description,time,price,subtitle})=>(


            <Row className='my-5'  xs={1} md={2} >
                <Col className="my-auto about-content" >
                <Slide left>
                <h2 >{title}</h2>
                <h3>{subtitle}</h3>
                </Slide>
                <div>
                    <p>{description}</p>
                </div>
                <div>
                    <button style={{background:'orange'}}>Booking Now</button>
                </div>
               </Col>
                <Zoom>
                <Col><img className='img-fluid' width='250px' height='250px' src={img} alt="" /></Col>
                </Zoom>
            </Row>)
              )}
            </Container>
        </div>
    );
};

export default Cart;