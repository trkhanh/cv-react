import React from "react";



const Section_1 = props => {
  console.log("props", props);
  const { info } = props;
  return (
    <div className="col-lg-6 col-md-12">
      <div className="card-body">
        <div className="h4 mt-0 title">{info.title}</div>
        <p>{info.des}</p>
        <p>{info.des2}</p>
        {/* {info.des2 &&  <p>{info.des2.nn}</p>} */}
        {/* { info.des2 &&  info.des2.nn ? <p>1</p>: <p>2</p>} */}
      </div>
    </div>
  );
};

const Section_2 = props => {
  const { info } = props;
  return (
    <div className="col-lg-6 col-md-12">
      <div className="card-body">
        <div className="h4 mt-0 title">{info.title}</div>
        <div className="row">
          <div className="col-sm-4">
            <strong className="text-uppercase">Age:</strong>
          </div>
          <div className="col-sm-8">{info.people.age}</div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-4">
            <strong className="text-uppercase">Email:</strong>
          </div>
          <div className="col-sm-8">{info.people.email}</div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-4">
            <strong className="text-uppercase">Phone:</strong>
          </div>
          <div className="col-sm-8">{info.people.phone}</div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-4">
            <strong className="text-uppercase">Address:</strong>
          </div>
          <div className="col-sm-8">{info.people.address}</div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-4">
            <strong className="text-uppercase">Language:</strong>
          </div>
          <div className="col-sm-8">{info.people.lang}</div>
        </div>
      </div>
    </div>
  );
};

// function SummaryInfo() {
//     console.log('SummaryInfo',props);
//     const {info} = props;
//     return (
//         <div className="section" id="about">
//             <div className="container">
//                 <div className="card" data-aos="fade-up" data-aos-offset="10">
//                     <div className="row">
//                         <Section_1 info={mock.summary_info} ></Section_1>
//                         <Section_2 info={mock.basic_info} ></Section_2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

function SummaryInfo(props) {
  // const {
  //   info: { summary_info, basic_info }
  // } = props;
  const info = props;
  console.log(info);
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            {/* <Section_1 {...info}></Section_1> */}
            {/* <Section_1 info={summary_info}></Section_1>
            <Section_2 info={basic_info}></Section_2> */}
          </div>
        </div>
      </div>
    </div>
  );
}



export { SummaryInfo };
