import React, { Component } from "react";
import "./Education.css";

class Education extends Component {
  render() {
    return (
      <div className="Education">
        <div className="EduSection">
          <h4>EDUCATION</h4>
          <h4>LANGUAGES</h4>
        </div>
        <div className="Content">
          <div className="Col Col-1">
            <h6>EMILY CARR UNIVERSITY</h6>
            <p>3d Rhino</p>
            <p>2013 - 2013</p>
            <br />
            <h6>EMILY CARR UNIVERSITY</h6>
            <p>Design Essentials</p>
            <p>2009 - 2013</p>
          </div>
          <div className="Col">
            <h6>BCIT COLLEGE</h6>
            <p>Design Essentials</p>
            <p>2008 - 2009</p>
            <br />
            <h6>ART & ARCHITECHTURE AZAD UNIVERSITY OF TEHRAN</h6>
            <p>Fine Arts</p>
            <p>2000 - 2004</p>
          </div>
          <div className="Col Col-3">
            <h6>ENGLISH</h6>
            <h6>FARSI</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
