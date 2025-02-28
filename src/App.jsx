import { useState } from "react";

function App() {
  // Put all of our states here
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  // When we submiti the city info
  const handleSubmit = async (event) => {
    // Stop it from reloading
    event.preventDefault()
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

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Weather</h1>
      <input
        placeholder="Please enter a city"
        type="text"
        value={city}
        onChange={onChangeCity}
        required
      />
      <br />
      <button type="submit" >Submit</button>
      <br />
      <div className="data">
        {/* If weather data exists pull a minimum of three things to display */}
        {weatherData &&( 
          <div>
            <h3>Weather in {weatherData.name}</h3>
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Feels Like: {weatherData.main.feels_like}</p>
            <p>Description: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
      <label>You are looking at the city : {city}</label>
    </form>
  );
}

export default App;