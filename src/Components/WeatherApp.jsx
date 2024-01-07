import React from 'react'
import '../App.css'
const WeatherApp = () => {
  return (
    <> 
    <div className='container'>
     <div className="weather">
        <div className="search">
            <input type="text" placeholder='Enter City Name' />
        </div>
     </div>
    </div>
    </>
   
  )
}

export default WeatherApp