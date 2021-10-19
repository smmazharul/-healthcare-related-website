import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Services from './Services';
import Slide from 'react-reveal/Zoom';
import Homes from './Homes';

const Home = () => {
    const{useApi}=useAuth()
    return (
        <div>
                <Banner></Banner>

                <Container className="mt-5 mb-3">
            <Slide left>
                <h2 className="text-center mb-4">Our Doctor</h2>
            </Slide>
                <Row xs={1} md={3} className="g-4 ">

                            {
                                    useApi.slice(0,6).map(user=> <Homes user={user} key={user.id}></Homes> )
                            }

                </Row>
            </Container>

        </div>
    );
};

export default Home;