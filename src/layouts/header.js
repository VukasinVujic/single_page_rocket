import React from 'react';
import logo from '../images/logo.png';
// import rocket1 from '../images/rocket1.png';
import rocket2 from '../images/rocket2.png';
import rocket3 from '../images/rocket3.png';
import rocket4 from '../images/rocket4.png';

class Header extends React.Component {

    render(){
        
        document.addEventListener('DOMContentLoaded', function(){
            window.addEventListener('scroll', myFunction);

        let header = document.getElementById("myHeader")
        let sticky = header.offsetTop;

        function myFunction(){
            if(window.pageXOffset > sticky){
                header.classList.add("sticky");
            }else {
                header.classList.remove("sticky");
            }
        }

        })

        return(
            <div>
                <div className="header">
                <ul className="headerList" id="myHeader">
                    <li className="singleItemHeader"><a href=""><img src={logo} alt="some picture"/></a></li>
                    <li className="singleItemHeader"><a  href="#home">HOME</a></li>
                    <li className="singleItemHeader"><a  href="#news">WHAT WE DO</a></li>
                    <li className="singleItemHeader"><a  href="#contact">CUSTOMOR STORIES</a></li>
                    <li className="singleItemHeader"><a  href="#about">PRICING</a></li>
                    <li className="singleItemHeader"><a  href="#about">CONTACT US</a></li>
                </ul>
                    <br/> <br/>
                    <div className="headerList" >
                    <span className="rocketPicture"><img src={rocket2} alt=""/></span>
                    <span className="cloudsPicture"><img src={rocket4} alt=""/></span>
                    <span className="starsPicture"><img src={rocket3} alt=""/></span>


                    <h3>Grow your Buisness with</h3>
                    <h3>Our Marketing Solutions</h3>
                    <p>We help our clients to increase their webiste</p>
                    <p>trafic, ranking and visibility in search results</p>
                    <button className="button">try it for free</button>
                    </div>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                </div>
                
                
            </div>

        )
    }

}

export default Header;