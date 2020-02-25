import React from 'react';
import blob from '../images/blob1.svg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel,faSearch, faColumns, faShareAlt, faLightbulb, faFolderOpen, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram, faYoutube, faVimeo, faVimeoV } from '@fortawesome/free-brands-svg-icons';


library.add(faStroopwafel)

class WhatWeDo extends React.Component{
    render(){
        return(
            <div>
                <div className="whatWoDoCenter">
                <h3>WHAT WE DO</h3>       
                <p>The full service we are offering is specifically</p>
                <p>designed to meet your business needs</p>
                </div>
                <div className="icons&Text">
                    {/* <img src={blob} alt=""/> */}

                </div>
                <FontAwesomeIcon icon={faSearch} color="orange" />
                <FontAwesomeIcon icon={faColumns} />
                <FontAwesomeIcon icon={faShareAlt} />
                
                <br/>
                {/* <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faVimeoV} /> */}


                {/* <FontAwesomeIcon icon={faHeart} /> */}
                {/* <FontAwesomeIcon icon={faFolderOpen} /> */}
                {/* <FontAwesomeIcon icon={faLightbulb} /> */}

            </div>
        )
    }
}

export default WhatWeDo