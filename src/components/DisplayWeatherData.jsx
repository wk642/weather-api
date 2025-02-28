import React from "react";

function DisplayWeatherData({ weatherData, getWeatherImage }) {
  // check to see if there is weather Data
  // if there is no data then return null
  if (!weatherData) {
    return null; 
  }

  return (
    <div className="data">
      <div>
        <h3>{weatherData.name}</h3>
        <img
          src={getWeatherImage(weatherData.weather[0].description)}
          alt="Weather Icon"
        />
        <p>Temperature: {weatherData.main.temp}</p>
        <p>Feels Like: {weatherData.main.feels_like}</p>
        <p>Description: {weatherData.weather[0].description}</p>
      </div>
    </div>
  );
}

export default DisplayWeatherData;