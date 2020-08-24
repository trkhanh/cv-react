import React, { Component } from "react";
import "./PersonalSkills.css";

class PersonalSkills extends Component {
  render() {
    const { personalSkills, academicSkills } = this.props;
    return (
      <div className="Skills">
        <div className="PSkillSection">
          <h4>PERSONAL SKILLS</h4>
          <h4>ACADEMIC SKILLS</h4>
        </div>
        <div className="Content">
          <div className="PersonalSkills">
            {personalSkills.map((skill, index) => {
              return <p key={index}>{skill}</p>;
            })}
          </div>
          <div className="AcademicSkills">
            {academicSkills.map((skill, index) => {
              return <p key={index}>{skill}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalSkills;
