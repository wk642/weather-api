import { useState } from "react";
import Form from "./components/Form"
//Creating a form component
// function Form() {
//   return (
//     <div className = "form-div">
//       <form className = "form">
//         <input placeholder="Enter a city name"/>
//       </form>
//     </div>
//   )
// }
function App() {
  const [data, setData] = useState("");

  const connectToBackend = () => {
    fetch("http://localhost:5000/weather/:city")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  };

  return (
    <div className="app">
      <h1>Weather</h1>
      <Form />
      <button onClick={connectToBackend}>Get weather</button>
      <div className="data">
        {data}
      </div>
    </div>
  );
}

export default App;