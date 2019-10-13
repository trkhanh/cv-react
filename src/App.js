import React from "react";
import "./App.css";
import "./themes/css/main.css";
import "./themes/css/bootstrap.min.css";
import * as LibComponent from "./components";
import Mock from "./mock/Mock.js";
import Skill from "./Skill";
import Experience from "./Experience";
// import Reference from './Reference';
import Contact from "./Contact";

function App() {
  const { summary_infos } = Mock;
  // console.log("summary_infos", summary_infos);
  console.log('LibComponent',LibComponent);
  return (
    <div className="App">
      <div className="page-content">
        <div>
          {/*about*/}
          <LibComponent.SummaryInfo info={summary_infos} />
          {/*Skill*/}
          {/* <Skill></Skill> */}
          {/*Experience*/}
          {/* <Experience></Experience> */}
          {/*Reference*/}
          {/* <Reference></Reference> */}
          {/*Contact*/}
          {/* <Contact></Contact> */}
        </div>
      </div>
    </div>
  );
}

export default App;
