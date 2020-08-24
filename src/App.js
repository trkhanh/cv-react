import React, { Component } from "react";
import "./App.css";
import CV from "./components/CV";

class App extends Component {
  render() {
    const personalSkills = [
      "Experience of working with large, small teams and independently",
      "Experience of time management and meet dead lines",
      "Ability to multi-task and handle several projects",
      "Excellent communications and customer services",
      "Comfortable managing large and small budgets",
      "Willing to learn new skills and techniques",
      "Exceptional interpersonal skills",
      "Experience of panel interviews",
      "Organized and detail oriented",
    ];

    const academicSkills = [
      "Experience of concept character design",
      "Highly experienced in drawing, painting, illustration",
      "Experience of layout and magazine design",
      "Experience of updating content management",
      "Experience of painting chalkboard and glass",
      "Experience of presentation",
    ];

    const computerSkills = [
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/company_rukygn.png",
        label: "APPLE",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/microsoft_bxmxmb.png",
        label: "WINDOWS",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/linux_wvzakz.png",
        label: "LINUX",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/logo_c8gcuo.png",
        label: "UBUNTU",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/adobe-illustrator_iztdus.png",
        label: "ILLUSTRATOR",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/adobe-photoshop_rqt3nj.png",
        label: "PHOTOSHOP",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/adobe-indesign_dv2tgm.png",
        label: "INDESIGN",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163565/outlock_vgvdpb.png",
        label: "OUTLOCK",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163386/wordpress_vy5fuc.png",
        label: "WORDPRESS",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163385/word_uctq6u.png",
        label: "WORD",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163385/excel_hm1bc0.png",
        label: "EXCEL",
      },
      {
        icon:
          "https://res.cloudinary.com/dpy2iegdk/image/upload/v1591163385/powerpoint_pljepk.png",
        label: "POWERPOINT",
      },
    ];

    return (
      <div className="App">
        <CV
          personalSkills={personalSkills}
          academicSkills={academicSkills}
          computerSkills={computerSkills}
        />
      </div>
    );
  }
}

export default App;
