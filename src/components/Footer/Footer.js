import React from 'react';
import { faAddressBook, faEnvelope, faHome, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';

import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../Contexts/AuthProvider';
const Footer = () => {
    return (
        <div style={{background:'rgb(64, 45, 84)', color:"#fff"}} className='footer'>
            <Container className="foorter-top container-fluid p-4 col-sm-6 col-md-6">
                <Row>
                    <Col md={4}>
                        <div style={{marginTop:"40%"}}>
                            <h2 style={{color:"#fff"}}>HM <span style={{color:"#65E6FA"}}>health Care</span> </h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div style={{marginTop:"40%"}} className="footer-list">
                            <ul>
                                <li><FontAwesomeIcon icon={faEnvelope} /> Email: 0184355@gmail.com</li>
                                <li><FontAwesomeIcon icon={faPhone} />  Phone: +880 17014-643612</li>
                                <li><FontAwesomeIcon icon={faHome} /> Adress: Rajshahi, New Market 6205 </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4}>
                         <div>
                         {/* <iframe width="250" height="250" src="https://www.youtube.com/embed/kTMMrAP6DNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        </div>
                    </Col>
                </Row>
            </Container>
            <p style={{textAlign:"center", background:"orange"}}>Copy @ Right By HM Health Care</p>
        </div>
    );
};

export default Footer;