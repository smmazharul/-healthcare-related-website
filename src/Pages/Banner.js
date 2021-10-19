import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../Asset/img/banner/banner1.jpg'
import banner2 from '../Asset/img/banner/banner2.jpg'
import banner3 from '../Asset/img/banner/banner3.jpg'
import '../Asset/CSS/topBanner.css'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className='banner'>
                    <img
                    className="d-block w-100  opacity-50"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption className='text-dark '>
                    <h3>HM Health Care</h3>
                    <p>Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='banner'>
                    <img
                    className="d-block w-100  opacity-50"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption className='text-dark '>
                     <h2>HM Health Care</h2>
                    <p>Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='banner'>
                    <img
                    className="d-block w-100  opacity-50"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption className='text-dark opacity-100'>

                        <h2>HM Health Care</h2>
                    <p>Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery.</p>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;