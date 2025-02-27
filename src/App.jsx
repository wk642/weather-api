import { useState } from "react";

//Creating a form component
function Form() {
  return (
    <div className = "form-div">
      <form className = "form">
        <input placeholder="Enter a city name"/>
      </form>
    </div>
  )
}
function App() {
  const [data, setData] = useState("");

  const connectToBackend = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  };

  return (
    <div className="App">
      <h1>Weather</h1>
      <Form />
      
      <button onClick={connectToBackend}>Get weather</button>

      <p>{data}</p>
    </div>
  );
}

export default App;