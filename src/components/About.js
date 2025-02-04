import React from "react";


// let st={
//     color:"white",
//     backgroundColor:"black"
// }

export default function About(props) {
  
 let state={
  color:props.mode=== "dark"?"white" : "#42743",
  backgroundColor : props.mode=== "dark"?"#042743" : "white"

 }

  //use state for button
  
  return (
    <div className="container my-5  ">
      <h1 style={state}>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={state}
            >
              <b>UpperCase and LowerCase</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={state}>
              TextToolBox provides allow you a feature to convert your text into uppercase or lowercase
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={state}
            >
             <b> Sentence Case</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={state}>
              TextToolBox allows you to convert your text into sentence case(Capitalize the first letter of you text)
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={state}
            >
              Remove Extra Space
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={state}>
              Sometime we copy text from different website which contains mutiple spaces.TextToolBox helps you to remove the extra spaces
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}
