import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const connectToBackend = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  };
console.log("blarg", connectToBackend);
  return (
    <div className="App">
      <h1>Weather</h1>
      <button onClick={connectToBackend}>Get weather</button>

      <p>{data}</p>
    </div>
  );
}

export default App;