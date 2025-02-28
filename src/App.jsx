import { useState } from "react";
import Form from "./components/Form";
import DisplayWeatherData from "./components/DisplayWeatherData";

function App() {
  // Put all of our states here
  // weather
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  // jokes
  const [joke, setJoke] = useState("");

  // weather section 
  // When we submit the city info
  const handleSubmit = async (event) => {
    // Stop it from reloading
    event.preventDefault();
    try{
      // Get all the data using the city
      const response = await fetch(`http://localhost:5000/weather/${city}`);
      // Get the whole response of all the info and store it
      const data = await response.json();
      // set the state to data
      setWeatherData(data);

      // getting the joke her
      if (data && data.weather && data.weather[0]) {
        getJoke(city, data.weather[0].description, data.main.temp);
      }
    } catch (error) {
      console.error("Error in getting weather:", error);
      setWeatherData("null");
    }
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

  // Jokes section 
  const getJoke = async () => {
    try {
      const response = await fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`
      );
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch joke.");
    }
  };


  return (
    <div className="wrapper">
      <div className="joke-div">
        <h2> Joke </h2>
        {joke && 
          <p>{joke}</p>
        }
      </div>
      <div className="form-div">
        <h1>Weather</h1>
          <Form 
            city={city}
            onChangeCity={onChangeCity}
            handleSubmit={handleSubmit} 
          />
      </div>
      <div className="weatherData-div">
        <DisplayWeatherData 
          weatherData={weatherData}
          getWeatherImage={getWeatherImage}
        />
      </div>
    </div>
  );
}

export default App;