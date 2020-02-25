import React from 'react';
import blob from '../images/blob1.svg';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faColumns, faShareAlt, faTasks } from '@fortawesome/free-solid-svg-icons';
// faLightbulb, faFolderOpen, faHeart

// import { faTwitter, faFacebookF, faInstagram, faYoutube, faVimeo, faVimeoV } from '@fortawesome/free-brands-svg-icons';

// faStroopwafel
// library.add(faStroopwafel)

class WhatWeDo extends React.Component{
    render(){
        return(
            <div>
                <div className="whatWoDoCenter">
                <h3>WHAT WE DO</h3>       
                <p>The full service we are offering is specifically</p>
                <p>designed to meet your business needs</p>
                </div>
                <div className="blob">
                    <img src={blob} alt="" className="searchBlob"/><FontAwesomeIcon icon={faSearch} color="orange" className="faDownload" />
                    <img src={blob} alt="" className="columnsBlob" />
                    <img src={blob} alt="" className="shareBlob" />
                    <img src={blob} alt="" className="tasksBlob"/>
                </div>
                {/* <h1>dfsdfsdfds</h1> */}
                
                <FontAwesomeIcon icon={faColumns} />
                <FontAwesomeIcon icon={faShareAlt} />
                <FontAwesomeIcon icon={faTasks} />
                
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