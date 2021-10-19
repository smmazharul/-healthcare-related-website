import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Team = (props) => {
    const {title,description,time,visit,img,subtitle}=props.user;
    
    return (
        <div>
             <Container>
                    <Card >
                        <Row >
                            <Col >
                                     <Card.Img variant="top" src={img}/>
                                    <Card.Body>
                                    <Card.Title> {title}</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">{subtitle}</small>
                                    </Card.Footer>
                            </Col>

                        </Row>
                    </Card>
             </Container>
        </div>
    );
};

export default Team;