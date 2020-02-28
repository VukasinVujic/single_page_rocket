import React from 'react';
import concept3 from '../images/concept3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck } from '@fortawesome/free-solid-svg-icons';

class OurPersonalizedSolutions extends React.Component {
    render(){
        return(
            <div>
                <div className="concept8">
                    <div>
                        <img src={concept3} alt=""/>
                    </div>
                    <div>
                    <h4>OUR PERSONALIZED SOLUTIONS</h4>
                    <br/>
                    <h3>Just sit and relax while we take care<br/> of your buisniess needs </h3>
                    <br/>
                    <p>Some text,Some text,Some text,<br/>Some text,Some text,Some text,<br/>Some text,Some text,Some text,<br/>Some text,Some text,Some text,</p>
                    <ul>
                        <div><FontAwesomeIcon icon={faCheck} color="blue" /> <li> Some text</li></div>
                        <div><FontAwesomeIcon icon={faCheck} color="blue" /> <li> Some text</li></div>
                        <div><FontAwesomeIcon icon={faCheck} color="blue" /> <li> Some text</li></div>
                        <div><FontAwesomeIcon icon={faCheck} color="blue" /> <li> Some text</li></div>
                    </ul>
                    </div>
            </div>
            <div id="emptySpace"></div>

            </div>
        )
    }
}

export default OurPersonalizedSolutions