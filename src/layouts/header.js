import React from 'react';
import logo from '../images/logo.png';
import rocket2 from '../images/rocket2.png';
import rocket3 from '../images/rocket3.png';
import rocket4 from '../images/rocket4.png';

class Header extends React.Component {

    render(){
        
        return(
            <div>
            <div  id="myHeader">
                <ul className="headerList">
                    <li className="singleItemHeader"><a href=""><img src={logo} alt="some picture"/></a></li>
                    <li className="singleItemHeader"><a  href="#home">HOME</a></li>
                    <li className="singleItemHeader"><a  href="#whatWeDo">WHAT WE DO</a></li>
                    <li className="singleItemHeader"><a  href="#contact">CUSTOMOR STORIES</a></li>
                    <li className="singleItemHeader"><a  href="#about">PRICING</a></li>
                    <li className="singleItemHeader"><a  href="#about">CONTACT US</a></li>
                </ul>
            </div>


            <div>

                <div className="header">
                
                    <div className="headerContent" >
                    
                    <div>
                    <h3>Grow your Buisness with</h3>
                    <h3>Our Marketing Solutions</h3>
                    <p>We help our clients to increase their webiste</p>
                    <p>trafic, ranking and visibility in search results</p>
                    <button className="button">try it for free</button>
                    </div>
                    </div>

                <div className="wrapper">
                    <span className="rocketPicture"><img src={rocket2} alt=""/></span>
                    <span className="cloudsPicture"><img src={rocket4} alt=""/></span>
                    <span className="starsPicture"><img src={rocket3} alt=""/></span>
                </div>

                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/>

                </div>
                {/* <div id="whatWeDo">
                <h1 >what we do </h1>

                </div>
                 */}
                
            </div>
            </div>

        )
    }

}

export default Header;