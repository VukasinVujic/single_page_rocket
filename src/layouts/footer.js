import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Footer1 from '../images/footer-a1.jpg';
import Footer2 from '../images/footer-a2.jpg';
import Footer3 from '../images/footer-a3.jpg';
import { faClock, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faYoutube, faVimeo, faVimeoV } from '@fortawesome/free-brands-svg-icons';


function Card(props) {
    return(
        <Container className="card">
            <Row>
                <Col xs="4"><img src={props.picture} alt="" className="picture"/></Col>
                <Col><p><b>{props.text}</b></p><p><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> 12 NOV 2017 <FontAwesomeIcon icon={faComment}></FontAwesomeIcon> 4</p></Col>
            </Row>
        </Container>
    )
} 
class Footer extends React.Component{
        render(){
            return(
            <div id="footer">
                <Container>
                    <Row> 
                        <Col>
                        <h6><b>Popular Posts</b></h6>
                        <Card  picture={Footer1} text="Magna Mollis Ultricies"/> 
                        <Card  picture={Footer2} text="Ornare Nullam Risus"/> 
                        <Card  picture={Footer3} text="Eusimod Nullam"/> 
                        </Col>
                        <Col>
                            <h6><b>Tags</b></h6>
                            <button className="button"> STILL  LIFE </button>
                            <button className="button"> URBAN </button>
                            <br/>
                            <button className="button"> NATURE </button>
                            <button className="button"> LANDSCAPE </button>
                            <br/> <br/>   
                            <h6><b>Categories</b></h6>
                            <Row>
                                <Col>
                                    <ul className="list">
                                        <li>Lifestyle(21)</li>
                                        <li>Photo(19)</li>
                                        <li>Journal(16)</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul className="list">
                                        <li>Works(7)</li>
                                        <li>Still Life(9)</li>
                                        <li>Travel(17)</li>
                                        </ul>
                                </Col>                        
                            </Row>
                        </Col>
                        <Col>
                            <h6><b>Get in Touch</b></h6>
                            <p>Moonshine St. 14/5 <br/> Nis, Serbia</p>
                            <p>info@email.com <br/>+00(123)456 78 90</p>
                            <h6><b>Elsewhere</b></h6>
                            <br/>
                            <div className="makeSpaceIcons">
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faFacebookF} />
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faYoutube} />
                                <FontAwesomeIcon icon={faVimeoV} />
                            </div>
                        </Col>

                        <Col>
                            <h6><b>Learn More</b></h6>
                            <p>About us <br/> Our story <br/>Projects</p>
                            <br/>
                            <h6><b>Need Help?</b></h6>
                            <p>Support <br/> Get Started <br/> Contact Us</p>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <div className="carosel">
                <p><span>&#169; </span> 2020 All right reserved.</p>
                </div>
            </div>
            )
        }
}

export default Footer