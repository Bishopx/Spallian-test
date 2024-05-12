import React, { useState } from 'react'
import axios from 'axios'

export function Weather () {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
  
    const searchLocation = (event) => {
      if (event.key === 'Enter') {
        axios.get(url).then((response) => {
          setData(response.data)
        }).catch((err) => {
            console.error(err);
        });
        setLocation('')
      }
    }
  
    return (
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyUp={(event) => {
              searchLocation(event);
            }}
            placeholder='Localisation, pays, ville...'
            type="text" />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
  
          {data.name !== undefined &&
            <div className="bottom">
              <div className="feels">
                {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
                <p>Ressenti</p>
              </div>
              <div className="humidity">
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p>Humidité</p>
              </div>
              <div className="wind">
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} M/s</p> : null}
                <p>Vitesse du vent</p>
              </div>
            </div>
          }
  
  
  
        </div>
      </div>
    );
}