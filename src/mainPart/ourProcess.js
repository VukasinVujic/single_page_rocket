import React from 'react';
import blob from '../images/blob1.svg';
import concept1 from '../images/concept1.png';
import { faLightbulb, faFolderOpen, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class OurProcess extends React.Component {
    render(){
        return(
            <div>
        <div className="ourProcess">
            <div>
                <h4>OUR PROCESS</h4>    
                <h3>We bring solutions to make life <br/> easier for our customers</h3>

                <div className="blob2">
                    <div className="iconWrapper">
                    <img src={blob} alt="" className="columnsBlob"/>
                    <FontAwesomeIcon icon={faLightbulb} color='blue' className="faIcon faIcon2"></FontAwesomeIcon>
                    </div>
                    
                    <div>
                    <h5 className="blob2text">Collect Ideas</h5>
                    <p className="blob2text">Some text, some text, some text, <br/> some text, some text</p>   
                    </div>

                    <div className="iconWrapper">
                    <img src={blob} alt="" className="shareBlob"/>
                    <FontAwesomeIcon icon={faFolderOpen} color='green' className="faIcon faIcon2 "></FontAwesomeIcon>
                    </div>

                    <div>
                    <h5 className="blob2text">Collect Ideas</h5>
                    <p className="blob2text">Some text, some text, some text, <br/> some text, some text</p>   
                    </div>
                    
                    <div className="iconWrapper">
                    <img src={blob} alt="" className="shareHeart"/>
                    <FontAwesomeIcon icon={faHeart} color='orange' className="faIcon faIcon2"></FontAwesomeIcon>
                    </div>
                    <div>
                    <h5 className="blob2text">Collect Ideas</h5>
                    <p className="blob2text">Some text, some text, some text, <br/> some text, some text</p>   
                </div>
            </div>
        </div>
               <div className="concept1">
                    <img src={concept1} alt=""/>
                </div>            
            </div>
            <div id="emptySpace"></div>

            </div>
        )
    }
}

export default OurProcess