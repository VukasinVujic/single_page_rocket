import React from 'react';
import rocket2 from '../images/rocket2.png';
import rocket3 from '../images/rocket3.png';
import rocket4 from '../images/rocket4.png';

class Header extends React.Component {

    render(){
        
        return(

            
            <div>

                <div className="headerRocket">
                
                    <div className="headerContent" >
                    
                    <div>
                    <h3>Grow your Buisness with <br/> Our Marketing Solutions</h3>
                    <p>We help our clients to increase their webiste <br/>trafic, ranking and visibility in search results</p>
                    <button className="button">try it for free</button>
                    </div>
                    </div>

                <div className="wrapper">
                    <span className="rocketPicture"><img src={rocket2} alt=""/></span>
                    <span className="cloudsPicture"><img src={rocket4} alt=""/></span>
                    <span className="starsPicture"><img src={rocket3} alt=""/></span>
                </div>

                <div id="emptySpace"></div>
                </div>
                {/* <div id="whatWeDo">
                <h1 >what we do </h1>
                </div>
                 */}
                
            </div>

        )
    }

}

export default Header;