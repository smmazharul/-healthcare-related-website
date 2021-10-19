import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

import Slide from 'react-reveal/Zoom';
import Jump from 'react-reveal/Zoom';

import '../Asset/CSS/AboutUs.css'
import about1 from '../Asset/img/About/about1.jpg'
import about2 from '../Asset/img/About/about2.jpg'
import about3 from '../Asset/img/About/about3.jpg'
import about4 from '../Asset/img/About/about4.jpg'
import about5 from '../Asset/img/About/about5.jpg'
import head from '../Asset/img/About/head.jpg'
import useAuth from '../Hooks/useAuth';
import Team from './Team';

const AboutUs = () => {
const {useApi}=useAuth()

    return (

        <div>

            <div className='about-top-banner mb-5'>
            <Container className="">
            <Row xs={1} md={2} >
                <Col className="my-auto about-content" >
                <Slide left>
                <h2 >Our Charmin</h2>
                    <p>Dr. Masuda Khatun is a Skin & Allergy Specialist doctor in Dhaka. Her qualification is MBBS, MD (Dermatology). She is working as a Skin & Allergy Specialist doctor in Dhaka Medical College & Hospital. She regularly provides treatment to her patients at Ibn Sina Diagnostic Center, Dhanmondi. Practicing hour of Dr. Masuda Khatun at Ibn Sina Diagnostic Center, Dhanmondi is 6pm to 9pm (Closed: Friday).</p>
                </Slide>


               </Col>
                <Zoom>
                <Col><img className='img-fluid' width='500px' height='500px' src={head} alt="" /></Col>
                </Zoom>
            </Row>
            </Container>
            </div>
            <Container>
            <Slide left>
                <h2 className="text-center mb-4">Why Choose Us?</h2>
            </Slide>

            <Row xs={1} md={3} className="g-4 about-card">

                <Col>
                <Jump>
                <Card>
                    <Card.Img variant="top" src={about1}/>
                    <Card.Body>
                    <Card.Title>Advanced medical technologies</Card.Title>
                    <Card.Text>
                        TSapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Jump>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={about2} />
                    <Card.Body>
                    <Card.Title>High professionalism of specialists</Card.Title>
                    <Card.Text>
                        TSapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.
                    </Card.Text>
                    </Card.Body>
                </Card>

                </Col>
                <Col>
                <Jump>
                <Card>
                    <Card.Img variant="top" src={about3} />
                    <Card.Body>
                    <Card.Title>High professionalism of specialists</Card.Title>
                    <Card.Text>
                        TSapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Jump>

                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={about4} />
                    <Card.Body>
                    <Card.Title>High quality of medical services</Card.Title>
                    <Card.Text>
                        TSapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.
                    </Card.Text>
                    </Card.Body>
                </Card>

                </Col>
                <Col>
                <Jump>
                <Card>
                    <Card.Img variant="top" src={about5} />
                    <Card.Body>
                    <Card.Title>Optimal prices and quality</Card.Title>
                    <Card.Text>
                        TSapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Jump>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={about1} />
                    <Card.Body>
                    <Card.Title>Optimal prices and quality</Card.Title>
                    <Card.Text>
                        TSapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.
                    </Card.Text>
                    </Card.Body>
                </Card>

                </Col>


        </Row>
    </Container>


    <div>

            <Container className="mt-5 mb-3">
            <Slide left>
                <h2 className="text-center mb-4">Our Team</h2>
            </Slide>
                <Row xs={1} md={3} className="g-4 ">

                            {
                                    useApi.slice(0,6).map(user=><Team user={user} key={user.id}></Team>)
                            }

                </Row>
            </Container>

    </div>
        </div>
    );
};

export default AboutUs;