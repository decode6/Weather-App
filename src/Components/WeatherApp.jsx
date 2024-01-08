import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../App.css";
import search_icon from "../assets/search_icon.png";
import cloud from "../assets/cloud.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
const WeatherApp = () => {

  const [data , setData] = useState({
    celcius: 10,
    name : "London",
    humidity : 10,
    speed : 2
  })
  useEffect (() => {
   const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=c562e8eb7ba07cb708d2d51aca38375a&units=metric";
    axios.get(apiUrl)
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }, [])

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
                <div className="humidity">
                  <p>20%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col">
                <img src={wind} alt="wind" />
                <div className="wind">
                  <p>2km/h</p>
                  <p>Wind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
