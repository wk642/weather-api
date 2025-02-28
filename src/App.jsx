import { useState } from "react";
import Form from "./components/Form";
import DisplayWeatherData from "./components/DisplayWeatherData";

function App() {
  // Put all of our states here
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  // When we submiti the city info
  const handleSubmit = async (event) => {
    // Stop it from reloading
    event.preventDefault();

    // Get all the data using the city
    const response = await fetch(`http://localhost:5000/weather/${city}`);
    // Get the whole response of all the info and store it
    const data = await response.json();
    // set the state to data
    setWeatherData(data);
  };

  // Grabing what the user is typing in the city
  const onChangeCity = (userCityInput) => {
    setCity(userCityInput.target.value);
  };

  // Grab the image
  const getWeatherImage = (description) => {
    console.log(description);
    // Clear sky 01d
    if (description.includes("clear sky")) {
      return "https://openweathermap.org/img/wn/01d@2x.png"; 
    } // Few Cloud 02d
    else if (description.includes("few clouds")) {
      return "https://openweathermap.org/img/wn/02d@2x.png"; 
    } // Scattered Clouds 03d
    else if (description.includes("scattered clouds")) {
      return "https://openweathermap.org/img/wn/03d@2x.png"; 
    } // Broken Clouds 04d
    else if (description.includes("broken clouds")) {
      return "https://openweathermap.org/img/wn/04d@2x.png"; 
    } // Overcast Clouds 04d
    else if (description.includes("overcast clouds")) {
      return "https://openweathermap.org/img/wn/04d@2x.png"; 
    } else if (description.includes("rain")) {
      return "https://openweathermap.org/img/wn/10d@2x.png"; // Rain
    } else if (description.includes("snow")) {
      return "https://openweathermap.org/img/wn/13d@2x.png"; // Snow
    } else if (description.includes("thunderstorm")) {
      return "https://openweathermap.org/img/wn/11d@2x.png"; // Thunderstorm
    } else {
      return "https://openweathermap.org/img/wn/50d@2x.png"; // Default image (mist)
    }
  };

  return (
    <div>
      <h1>Weather</h1>
        <Form 
          city={city}
          onChangeCity={onChangeCity}
          handleSubmit={handleSubmit} 
        />
        <DisplayWeatherData 
          weatherData={weatherData}
          getWeatherImage={getWeatherImage}
        />
        {/* <label>You are looking at the city : {city}</label> */}
    </div>

  );
}

export default App;