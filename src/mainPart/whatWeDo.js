import React from 'react';
import blob from '../images/blob1.svg';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faColumns, faShareAlt, faTasks } from '@fortawesome/free-solid-svg-icons';

// import { faTwitter, faFacebookF, faInstagram, faYoutube, faVimeo, faVimeoV } from '@fortawesome/free-brands-svg-icons';

// faStroopwafel
// library.add(faStroopwafel)

class WhatWeDo extends React.Component{
    render(){
        return(
            <div className="whatWeDoBackground" id="whatWeDo">
                <div className="whatWoDoCenter">
                <h3>WHAT WE DO</h3>       
                <p>The full service we are offering is specifically <br/> designed to meet your business needs</p>
                <br/><br/>
                </div>
                <div className="blob">
                    <img src={blob} alt="" className="searchBlob"/>
                    <FontAwesomeIcon icon={faSearch} color="red" className="faIcon faSearch"/>
                    
                    <img src={blob} alt="" className="columnsBlob" />
                    <FontAwesomeIcon icon={faColumns} color="blue" className="faIcon faColumns"/>
                    
                    <img src={blob} alt="" className="shareBlob" />
                    <FontAwesomeIcon icon={faShareAlt} color="green" className="faIcon faShareAlt"/>

                    <img src={blob} alt="" className="tasksBlob"/>
                    <FontAwesomeIcon icon={faTasks} color="darkcyan" className="faIcon faTasks "/>
               
                </div>
                <div className="blob underBlob">
                    <h3>SEO Services</h3>
                    <h3>Web Design</h3>
                    <h3>Social Engagment</h3>
                    <h3>Content Marketing</h3>

                    <p>Some text, some text, some text,<br/>some text, some text, some text,<br/>some text, some text, some text</p>               
                    <p>Some text, some text, some text,<br/>some text, some text, some text,<br/>some text, some text, some text</p>               
                    <p>Some text, some text, some text,<br/>some text, some text, some text,<br/>some text, some text, some text</p>               
                    <p>Some text, some text, some text,<br/>some text, some text, some text,<br/>some text, some text, some text</p>               

                </div>
                <div id="emptySpace"></div>
                
                
                {/* <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faVimeoV} /> */}
                
            </div>
        )
    }
}

export default WhatWeDo