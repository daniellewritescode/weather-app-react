import React from "react";
import ReactDOM from "react-dom";
//import CurrentCity from "./CurrentCity";
/*import CurrentCondition from "./CurrentConditions";
import CurrentTemp from "./CurrentTemp"; */
import CurrentTime from "./CurrentTime";
import Weather from "./Weather";
//import Search from "./Search";

import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col header">Weather Search by City</div>
          </div>
          <div className="row">
            <div className="mb-3"></div>
          </div>
          <div className="row">
            <div className="col timeofDay">
              <Weather defaultCity="Philadelphia"/>
            </div>
          </div>
          <div className="row">
            <div className="col timeofDay">
              <CurrentTime />
            </div>
          </div>
          <div className="row">
            <div className="col codedBy">
              <span>
                <a href="https://github.com/daniellewritescode">
                  GitHub
                </a>{" "}
                &nbsp; Coded by Danielle
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
