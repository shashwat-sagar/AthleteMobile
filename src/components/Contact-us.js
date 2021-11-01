import React from "react";
import './styles/Contact-us.css';
// import GoogleApiWrapper from "./Map.js";
function Contact() {
  return (
    <>
    <div className="Contact">
      <div class="bodyContent">
     
    <div class="heading">
        <h3 class="headingTop"><font color="ffc400">L</font>ocate <font color="ffc400">U</font>s <font color="ffc400">O</font>n <font color="ffc400">M</font>aps</h3>
    </div>
    <div class="mapouter"><div class="gmap_canvas"><iframe class="map" title="/" id="gmap_canvas" src="https://maps.google.com/maps?q=7369+963,%20Gabhariya,%20Chauraha,%20Sultanpur,%20Uttar%20Pradesh%20228001&t=&z=13&ie=UTF8&iwloc=&output=embed"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe><a href="https://www.embedgooglemap.net/"> </a></div></div>

    {/* <div class="mapouter">
      <div class="gmap_canvas">
      <GoogleApiWrapper />
      </div>
    </div> */}
    
       
      </div>
    </div>
    </>
  );
}

export default Contact;
