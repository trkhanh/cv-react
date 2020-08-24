import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Left">
          <h4>INFOLEIKARSMI.COM</h4>
          <p className="Name">LEILA KARIMI</p>
          <p className="Content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor
            beatae mollitia ratione cupiditate? Quod ullam veritatis dolorem
            tenetur est? Rerum minima qui placeat culpa eveniet in illum quis
            amet.
          </p>
        </div>
        <div className="Right">
          <h4>GENERAL INFORMATION</h4>
          <div className="BorderBottom"></div>
          <div className="Location">
            <p className="CommonParagraph">NORTH</p>
            <p className="CommonParagraph TextAlignLeft">VANCOUVER</p>
            <p className="CommonParagraph TextAlignLeft">LOCATION</p>
          </div>
          <div className="Street CommonParagraph">
            223-119 WEST 22ND ST. V7M084
          </div>
          <div className="PhoneNumber">
            <div className="Icon">
              <img
                src="https://image.flaticon.com/icons/png/512/65/65680.png"
                alt="Phone"
              />
            </div>
            <div className="Number">778 881 0502</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
