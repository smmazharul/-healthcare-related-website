import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Asset/CSS/Services.css'
import useAuth from '../Hooks/useAuth';
const Services = (props) => {
    const {title,description,time,visit,img,subtitle, id}=props.user;
    const service=props.user;
const {addToCart}=useAuth();

    return (
        <div>
             <Container className="service">
                    <Card className='service-card'>
                        <Row>
                            <Col>
                                     <Card.Img variant="top" src={img}/>
                                    <Card.Body>
                                    <Card.Title> {title}</Card.Title>

                                            <div className='service-cart-content'>
                                                <h5>{subtitle}</h5>
                                                <p>{description}</p>
                                            </div>
                                            <div className='time-visit'>
                                                <h4>Time: {time}PM</h4>
                                                <h4>Visit: {visit} BDT</h4>
                                            </div>


                                    </Card.Body>
                                    <Card.Footer>
                                    <div className='service-btn'>
                                    <button onClick={()=>addToCart(service)} className='button1'>Booking Now</button>
                                    <Link to={`/service/${id}`}>
                                     <button className='button2'>See Details</button>
                                    </Link>
                                    </div>
                                    </Card.Footer>
                            </Col>

                        </Row>
                    </Card>
             </Container>
        </div>
    );
};

export default Services;