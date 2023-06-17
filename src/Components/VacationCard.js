import React from "react";
import locationIcon from "../images/location-icon.png";

export default function VacationCard(props) {
  return (
    <div className="vacation-card card">
      <div className="vacation-image-holder">
        <img src={props.vac.image} alt="country-pic" />
      </div>
      <div className="vacation-info">
        <div className="country-info">
          <img src={locationIcon} alt="location-icon" />
          <h4>{props.vac.country}</h4>
          <span>view on google maps</span>
        </div>
        <div className="vacation-preview">
          <h2 className="vacation-location">{props.vac.location}</h2>
          <p className="vacation-schedule">{props.vac.schedule}</p>
          <p className="vacation-desc">{props.vac.desc}</p>
        </div>
      </div>
    </div>
  );
}
