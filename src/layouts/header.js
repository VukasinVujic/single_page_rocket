import React from 'react';
import logo from '../images/logo.png';

class Header extends React.Component {

    render(){
        return(
            <div>
                <div className="header">
                
                <ul className="headerList">
                    <li className="singleItemHeader"><a href=""><img src={logo} alt="some picture"/></a></li>
                    <li className="singleItemHeader"><a  href="#home">HOME</a></li>
                    <li className="singleItemHeader"><a  href="#news">WHAT WE DO</a></li>
                    <li className="singleItemHeader"><a  href="#contact">CUSTOMOR STORIES</a></li>
                    <li className="singleItemHeader"><a  href="#about">PRICING</a></li>
                    <li className="singleItemHeader"><a  href="#about">CONTACT US</a></li>
                </ul>
                    {/* <div className="headerList">
                    <h3>Grow your Buisness with</h3>
                    <h3>Our Marketing Solutions</h3>
                    <p>We help our clients to increase their webiste</p> */}

                    {/* </div> */}
                </div>
            </div>

        )
    }

}

export default Header;