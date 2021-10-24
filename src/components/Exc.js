import React from "react";
import './styles/Exc.css'
import image1 from "../Images/gympics/1.jpeg"
// import image2 from "../Images/gympics/2.jpeg"
// import image3 from "../Images/gympics/3.jpeg"
// import image4 from "../Images/gympics/4.jpeg"
// import image5 from "../Images/gympics/5.jpeg"
// import image6 from "../Images/gympics/6.jpeg"
// import image7 from "../Images/gympics/7.jpeg"
// import image8 from "../Images/gympics/8.jpeg"
// import image9 from "../Images/gympics/9.jpeg"
function Exc() {
  return (
    <>
      <p>
        <font color="red">Chest page</font>
      </p>
      <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image1} class="img-fluid rounded-start" alt="" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Exc;
