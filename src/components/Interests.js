import React, { Component } from "react";
import "./Interests.css";

class Interests extends Component {
  render() {
    return (
      <div className="Interests">
        <div className="IntSection">
          <h4>INTERESTS</h4>
          <h4>REFERENCES</h4>
        </div>
        <div className="IntContent">
          <div className="Interest">
            <div>Drawing, Painting, Running, Swimming,</div>
            <div>Playing Tennis, Reading Books, Travelling</div>
          </div>
          <div className="Reference">Available upon request</div>
        </div>
        <div className="Horizon"></div>
      </div>
    );
  }
}

export default Interests;
