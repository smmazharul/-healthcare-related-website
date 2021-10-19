import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import Services from './Services';
import Slide from 'react-reveal/Zoom';
import '../Asset/CSS/Service.css'
const Service = () => {
    const{useApi}=useAuth();
    return (
        <div className='service-container'>

            <Container className="mt-5 mb-3 ">
            <Slide left>
                <div><h2 className="text-center mb-4 mt-5">Our Service</h2></div>
            </Slide>
                <Row xs={1} md={3} className="g-4 ">

                            {
                                    useApi.map(user=> <Services user={user} key={user.id}></Services> )
                            }

                </Row>
            </Container>
        </div>
    );
};

export default Service;