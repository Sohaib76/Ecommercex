
import React, { Component } from 'react';


class Details extends Component {
  render() {

   // const mouseImg = "http://s3.amazonaws.com/digitaltrends-uploads-prod/2016/10/Razer-Deathadder-Elite-logo.jpg";
    const mouseImg1 = "https://assets2.razerzone.com/images/razer-deathadder-elite/cbbd3f8871be1bd4929b8c8c819b6bde-Deathadder-Elite-Base_gallery5.jpg"
    const mouseImg2 = "https://assets.razerzone.com/eeimages/products/25919/daelite_gallery11.jpg"
    const mouseImg3 = "https://img.digitaltrends.com/image/razer-deathadder-elite-logo-1500x1000.jpg"


    return (

      <div style={{margin:"20px"}}>
      
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src={mouseImg3} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">The world’s most advanced optical sensor</h5>
              <p className="card-text">
                Equipped with the new esports-grade 16,000 DPI optical sensor and true tracking at 450 Inches Per Second (IPS), the Razer DeathAdder Elite ergonomic mouse gives you the absolute advantage. Engineered to redefine the standards of accuracy and speed, this incredible mouse sensor crushes the competition 
                with a Resolution Accuracy of 99.4%, so you land killing blows with pinpoint precision.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={mouseImg1} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Gaming-optimized Razer™ Mechanical Mouse Switches</h5>
              <p className="card-text">Engineered to give you the unfair advantage in intense gameplay, the Razer DeathAdder Elite comes with all-new Razer™ Mechanical Mouse Switches. Co-designed and produced with the leading global mouse switch supplier, Omron, the new switches are optimized and tweaked 
              for the fastest response times for gaming and for extended durability up to 50 million clicks.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={mouseImg2} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Ergonomic Mouse Shape Perfected for Esports Athletes</h5>
              <p className="card-text">The Razer DeathAdder Elite features an iconic ergonomic mouse structure that top esports athletes swear by and stays incredibly comfortable even during long high-octane battles.
               Together with two rubber side grips, you’ll always have complete control of your gameplay.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
      </div>







      <div className="card text-white bg-dark mb-3" style={{maxWidth : "180rem"}}>
      <div className="card-header" style={{color:"green", fontSize:"30px"}}>Tech Specs</div>
      <div className="card-body">
        <h5 className="card-title">At A Glance</h5>
        <ul className="card-text">
          <li>True 16,000 DPI optical sensor</li>
          <li>Up to 450 IPS / 50 g acceleration</li>
          <li>Razer Mechanical Mouse switches</li>
          <li>Ergonomic right-handed design with textured rubber side grips</li>
          <li>Razer Chroma™ lighting with 16.8 million customizable color options</li>
          
        </ul>
        <a href="#" class="btn btn-success ">Buy Now</a>

        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
    </div>








    </div>
      
    );
  }
}

export default Details;
