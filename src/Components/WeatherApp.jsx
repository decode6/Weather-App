import React from "react";
import "../App.css";
import search_icon from "../assets/search_icon.png";
import cloud from "../assets/cloud.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
const WeatherApp = () => {
  return (
    <>
      <div className="container">
        <div className="weather">
          <div className="search">
            <input type="text" placeholder="Enter City Name" />
            <button>
              <img src={search_icon} alt="" />
            </button>
          </div>
          <div className="weather-info">
            <img className="cloud-icon" src={cloud} alt="cloud" />
            <h1>23°C</h1>
            <h2>London</h2>
            <div className="details">
              <div className="col">
                <img src={humidity} alt="humidity" />
              </div>
              <div>
                <p>20%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src={wind} alt="wind" />
            </div>
            <div>
              <p>2km/h</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
