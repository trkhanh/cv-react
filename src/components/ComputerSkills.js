import React, { Component } from "react";
import "./ComputerSkills.css";

class ComputerSkills extends Component {
  render() {
    const { computerSkills } = this.props;
    return (
      <div className="ComputerSkills">
        <h4 className="CSkillSection">COMPUTER SKILLS</h4>
        <div className="Content">
          {computerSkills.map((skill, index) => {
            return (
              <div className="Item" key={index}>
                <div className="Image">
                  <img src={skill.icon} alt={skill.label} />
                </div>
                <div className="Label">{skill.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ComputerSkills;
