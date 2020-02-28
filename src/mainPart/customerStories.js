import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import customer1 from '../images/customer1.jpg';
import customer2 from '../images/customer2.jpg';
import customer3 from '../images/customer3.jpg';
import customer4 from '../images/customer4.jpg';
import customer5 from '../images/customer5.jpg';
import customer6 from '../images/customer6.jpg';

class CustomerStories extends React.Component {
        state = {
            galleryItems: [customer1, customer2, customer3,customer4,customer5,customer6].map((i) =>
                <div>
                    <p>some text some text some text <br/> some text some text some text <br/> some text some text some text</p>
                    <img key={i} src={i} className="shape"/>
                    <div className="makeInlineDive" style={{ display: i === customer1 ? 'block' : 'none'}}><span>Conor Gibson <br/> Financial Analyst </span></div>
                    <div className="makeInlineDive" style={{ display: i === customer2 ? 'block' : 'none'}}><span>Coriss Ambady <br/> Marketing Specialist </span></div>
                    <div className="makeInlineDive" style={{ display: i === customer3 ? 'block' : 'none'}}><span>Barclay Widerski <br/> Sales Manager </span></div>
                    <div className="makeInlineDive" style={{ display: i === customer4 ? 'block' : 'none'}}><span>Potencijalni Manijak <br/> School teacher </span></div>
                    <div className="makeInlineDive" style={{ display: i === customer5 ? 'block' : 'none'}}><span>Lepa Brena <br/> Blacksmith </span></div>
                    <div className="makeInlineDive" style={{ display: i === customer6 ? 'block' : 'none'}}><span>Lepojka Belic <br/> Counterintelligence Service Officer </span></div>
                </div>    
      ),
        }   
        responsive = {
          0: { items: 1 },
          1024: { items: 3 },
        }
        
        onSlideChange(e) {
          console.debug('Item`s position during a change: ', e.item)
          console.debug('Slide`s position during a change: ', e.slide)
        }
       
        onSlideChanged(e) {
          console.debug('Item`s position after changes: ', e.item)
          console.debug('Slide`s position after changes: ', e.slide)
        }
       
        render() {
          return (
              <div className="colorBackground" id="customStories" >
                <div className="carosel">
                <h5>CUSTOMOR STORIES</h5>
                <h4>Custom satisfacation is our major goal. <br/> See what our customers are saying about us </h4>
                </div>
                <div className="carosel">
                      <AliceCarousel
                      items={this.state.galleryItems}
                      responsive={this.responsive}
                      //autoPlayInterval={2000}
                      //autoPlayDirection="rtl"
                      //autoPlay={true}
                      fadeOutAnimation={true}
                      mouseTrackingEnabled={true}
                      //playButtonEnabled={true}
                      disableAutoPlayOnAction={true}
                      onSlideChange={this.onSlideChange}
                      onSlideChanged={this.onSlideChanged}
                      />
                </div>
                <div id="emptySpace"></div>
            </div>        
          )
        }
      }


export default CustomerStories;
/********************************************* */
// const CustomerStories = () => {
  //         const handleOnDragStart = (e) => e.preventDefault()
  //       return (
    //             <AliceCarousel mouseTrackingEnabled>
  //                 <div>
  //                 <p>dkjfsdlkjsdlk</p>
  //           <img src={customer1} onDragStart={handleOnDragStart} className="yours-custom-class" />
    
  //             </div>
  //           <img src={customer2} onDragStart={handleOnDragStart} className="yours-custom-class" />
  //           <img src={customer3} onDragStart={handleOnDragStart} className="yours-custom-class" />
  //           <img src={customer4} onDragStart={handleOnDragStart} className="yours-custom-class" />
  //           <img src={customer5} onDragStart={handleOnDragStart} className="yours-custom-class" />
  //           <img src={customer6} onDragStart={handleOnDragStart} className="yours-custom-class" />
    
  //         </AliceCarousel>
  //       )
  //     }

    


/********************************************* */



