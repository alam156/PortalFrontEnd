import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faComputer, faCoffee, faCode, faCloud, faBucket, faCog } from '@fortawesome/free-solid-svg-icons';
export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-6 col-md-3">
                  {" "}
                  <FontAwesomeIcon icon={faComputer} style={{color: 'white'}}/>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
