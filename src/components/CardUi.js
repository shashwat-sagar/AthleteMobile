import React from "react";
import image from "../Images/1.png";
import "./styles/card-style.css";
import { Link } from "react-router-dom";
// import "./About.css"

function About() {
  return (
    <div className="TrainerCardUI">
      <div className="card text-center">
        <div className="overflow">
          <img src="" id="trainerImg" alt={image} className="trainImg" />
        </div>
        <div className="card-body text-dark">
          <h6 className="card-title text-warning">Mr. Prashant Praksdh Upadhayay</h6>
          <br></br>
          <p className="card-text text-secondary">
           Trained by Gold's Gym Fitness Institute 
          </p>
          <Link to="/aboutTrainer">
          <button className="trainerPageButton">
          
            Go Anywhere
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;

// Trained by Gold's Gym Fitness Institute