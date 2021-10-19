
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import '../../../Asset/CSS/Details.css'
import useAuth from '../../../Hooks/useAuth';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Zoom';
import notSetected from '../../../Asset/img/details/not-selected.jpg'
import { Link } from 'react-router-dom';



const Details = (props) => {
 const [cart, setCart]=useState([]);

    const {Id}= useParams();

    const {useApi} = useAuth()
    const {addToCart}=useAuth();
    const [data, setData]=useState({});

    useEffect(()=>{
       const datas = useApi?.find(i=>i.id==Id)

        setData(datas)
    },[Id])



    return (
        <div className='details'>
                               {data?.title?(<Container className="">
                                    <Row xs={1} md={2} >
                                        <Col className="my-auto about-content" >
                                        <Slide left>
                                        <h2>{data?.title}</h2>
                                        <p>{data?.description}</p>
                                        </Slide>
                                        <div className='pay-time'>
                                            <h3>Time :{data?.time} PM</h3>
                                            <h3>Doctor Visit: {data?.visit} BDT</h3>
                                        </div>

                                        <div>
                                            <button onClick={()=>addToCart(data)} className='booking-btn'>Booking Now</button>
                                        </div>


                                    </Col>
                                        <Zoom>
                                        <Col><img className='img-fluid' width='500px' height='500px' src={data?.img} alt="" /></Col>
                                        </Zoom>
                                    </Row>
                                </Container>
                                ):(
                                    <div className='notselected' >
                                        <img src={notSetected} alt="" />
                                       <Link to="/service">
                                       <button className='booking-btn' style={{marginLeft:'38%'}} >Go Back Service</button>
                                       </Link>
                                    </div>

                                )}
                                    <h2></h2>

        </div>
    );
};

export default Details;