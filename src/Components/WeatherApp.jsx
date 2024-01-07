import React from 'react'
import '../App.css'
import search_icon from '../assets/search_icon.png'
const WeatherApp = () => {
  return (
    <> 
    <div className='container'>
     <div className="weather">
        <div className="search">
            <input type="text" placeholder='Enter City Name' />
            <button><img src={search_icon} alt="" /></button>
        </div>
     </div>
    </div>
    </>
   
  )
}

export default WeatherApp