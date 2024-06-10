import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faCog, faCloud, faMobileAlt, faCoffee, faHatCowboy, faCloudMoonRain, faSearch, faCookie, faUmbrellaBeach, faCannabis, faCrown, faCubes, faCamera, faUserClock, faCalendar } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Services = (props) => {
  const iconLookup = {
    icon1:faCalendar,
    icon2: faCrown,
    icon3: faCubes,
    icon4: faCamera,
    icon5: faUserClock,
    icon6: faCannabis
  };
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We provide Services for customer satisfaction.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <FontAwesomeIcon icon={iconLookup[d.icon]} size="5x" className="text-light mb-3x" />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
