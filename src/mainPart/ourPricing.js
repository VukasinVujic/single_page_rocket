import React from 'react';

class OurPricing extends React.Component {
    render(){
        return(
            <div className="colorBackground toCenterParent" id="ourPricing">
                <div className="positioning-ourPricing">
                    <div className="text-OurPricing">
                        <h6>OUR PRICING</h6>
                        <h4>We Offer great prices, <br/> premium products and quality <br/> service for your business</h4>
                        <p>some text some text some text some text some <br/> some text some text some text some text some <br/> some text some text some text some text some  </p>
                    </div>
                    <div className="square-container">
                        <div className="square">
                            <p>$ <span className="bigNumber">9</span>/month</p>
                            <h5>Basic Plan</h5>
                            <p>1 Project <br/> 100K Api Access <br/> 100MB Storage <br/>Custom Cloud Services <br/>7/24 Support</p>
                            <button className="button">CHOOSE PLAN</button>
                        </div>
                        <div className="square">
                        <p>$ <span className="bigNumber">19</span>/month</p>
                            <h5>Premium Plan</h5>
                            <p>5 Project <br/> 100K Api Access <br/> 200MB Storage <br/>Custom Cloud Services <br/>7/24 Support</p>
                            <button className="button">CHOOSE PLAN</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurPricing