import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Homes = (props) => {
    const {title,description,time,visit,img,subtitle}=props.user;

    return (
        <div>
            <Container>
                    <Card >
                        <Row >
                            <Col>
                                     <Card.Img variant="top" src={img}/>
                                    <Card.Body>
                                    <Card.Title> {title}</Card.Title>
                                    <Card.Text>
                                            <h4>{subtitle}</h4>
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <Link to="/service">
                                    <button  style={{background:'orange', color:'#fff'}}>Details</button>
                                    </Link>
                                    </Card.Footer>
                            </Col>

                        </Row>
                    </Card>
             </Container>

        </div>
    );
};

export default Homes;