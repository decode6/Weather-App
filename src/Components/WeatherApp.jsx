import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../App.css";
import search_icon from "../assets/search_icon.png";
import cloud from "../assets/cloud.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import clear from "../assets/clear.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import drizzle from "../assets/drizzle.png";


const WeatherApp = () => {

  const [data , setData] = useState({
    celcius: 10,
    name : "London",
    humidity : 10,
    speed : 2,
    image: {cloud}
  })
  const [name,setName] = useState("");
  // useEffect (() => {
   
  // }, []) //api

  const handleClick = () =>{
    if(name!==""){
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c562e8eb7ba07cb708d2d51aca38375a&units=metric`;
     axios.get(apiUrl)
     .then(res => {
      // let imagePath = "";
      // if(res.data.weather[0].main== "Clouds"){
      //     imagePath = '/assets/cloud.png'
      
      // }else if(res.data.weather[0].main== "Clear"){
      //   imagePath = "/assets/clear.png"
      // }else if(res.data.weather[0].main== "Rain"){
      //   imagePath = "/assets/cloud.png"
      // }else if(res.data.weather[0].main== "Drizzle"){
      //   imagePath = "/assets/cloud.png"
      // }else if(res.data.weather[0].main== "Mist"){
      //   imagePath = "/assets/cloud.png"
      // }else{
      //   imagePath = {cloud}
      // }

      setData({...data, celcius: res.data.main.temp, name: res.data.name, 
        humidity: res.data.main.humidity, speed: res.data.wind.speed,
      image:imagePath})
     })
     .catch(err => console.error(err));
    }
  }

  return (
    <>
      <div className="container">
        <div className="weather">
          <div className="search">
            <input type="text" placeholder="Enter City Name"  onChange={e =>setName(e.target.value)}/>
            <button>
              <img src={search_icon} onClick={handleClick} alt="" />
            </button>
          </div>
          <div className="weather-info">
            <img className="cloud-icon" src={cloud} alt="cloud" />
            <h1>{Math.round(data.celcius)}°c</h1>
            <h2>{data.name}</h2>
            <div className="details">
              <div className="col">
                <img src={humidity} alt="humidity" />
                <div className="humidity">
                  <p>{Math.round(data.humidity)}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col">
                <img src={wind} alt="wind" />
                <div className="wind">
                  <p>{Math.round(data.speed)}</p>
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
