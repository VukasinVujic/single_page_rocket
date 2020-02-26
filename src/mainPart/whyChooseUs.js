import React from "react";
import concept8 from '../images/concept8.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck  } from '@fortawesome/free-solid-svg-icons';


class WhyChooseUs extends React.Component {
    render(){
        return(
            <div>
                <div className="concept8">
                    <div>
                        <img src={concept8} alt=""/>
                    </div>
                    <div>
                    <h4>WHY CHOOSE US?</h4>
                    <h3>Why is Search Engine Optimization <br/> important for you business </h3>
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

export default WhyChooseUs;