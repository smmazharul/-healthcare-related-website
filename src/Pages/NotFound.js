import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Asset/CSS/NotFound.css'
import useAuth from '../Hooks/useAuth';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Zoom';
import NotFound1 from '../Asset/img/notfound/yalantis-interactive-404.gif'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
             <Container className="mt-5">


            <Row className='my-3'  xs={1} md={2} >
                <Col className="my-auto about-content" >

                <Zoom>
                    <img src={NotFound1} />
                </Zoom>
                <Slide left>
                    <Link to='/home' className='not-btn'>
                    <button>Go to Home</button>
                    </Link>
                </Slide>
               </Col>

            </Row>

            </Container>
        </div>
    );
};

export default NotFound;