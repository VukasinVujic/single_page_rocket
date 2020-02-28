import React from 'react';
import concept12 from '../images/concept12.png';


class LetsTalk extends React.Component {
    render(){
        return(
            <div>
                <div className="concept8">
                    <div>
                        <img src={concept12} alt=""/>
                    </div>
                    <div>
                    <h4>LET'S TALK</h4>
                    <h3>Let's make something great together.<br/> If you got any questions,<br/> don't hesitate to get in touch with us. </h3>
                    <br/>
                    <p>Some text,Some text,Some text,<br/>Some text,Some text,Some text,<br/>Some text,Some text,Some text,<br/>Some text,Some text,Some text,</p>
                    <button className="button">Contact us</button>
                    </div>    

                </div>
                <div id="emptySpace"></div>
            </div>
        )
    }
}


export default LetsTalk