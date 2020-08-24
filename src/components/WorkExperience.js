import React, { Component } from "react";
import "./WorkExperience.css";

class WorkExperience extends Component {
  render() {
    return (
      <div className="WorkExperience">
        <div className="ExpSection">
          <h4>WORK EXPERIENCE</h4>
          <h4>SOME CLIENTS</h4>
        </div>
        <div className="ExpContent">
          <div className="Col">
            <h6>PRESSED METAL</h6>
            <p>PRODUCTS</p>
            <p>Graphic | Industrial Designer</p>
            <p>2013 - Present</p>
            <br />
            <h6>OP PUBLISHING</h6>
            <p>Graphic | Layout Designer</p>
            <p>2008 - 2009</p>
          </div>
          <div className="Col">
            <h6>WHOLE FOODS</h6>
            <p>MARKET</p>
            <p>Graphic Artist | Store Designer</p>
            <p>2008 - 2009</p>
            <br />
            <h6>CREATIVE ENGINE</h6>
            <p>Graphic Designer</p>
            <p>2008 - 2008</p>
          </div>
          <div className="Col">
            <h6>ABSOLUTE CREATIVE</h6>
            <p>MARKET</p>
            <p>Graphic Designer</p>
            <p>2008 - 2013</p>
          </div>
          <div className="Col Col-4">
            <h6>LE PETIT CHOU</h6>
            <h6>UBC</h6>
            <h6>METAMORPHOUS</h6>
            <h6>CARLA TAYLOR</h6>
            <h6>IL VENTO</h6>
            <h6>MARINE VIEW</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkExperience;
