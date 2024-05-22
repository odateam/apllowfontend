import { useState } from "react";
import "./App.css";
import { getCar, setCar } from "./services";

function App() {
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [clothes, setclothes] = useState(null);

  const sendMessageToContract = async () => {
    await setCar(color, brand, model);
  };

  const getMessageToContract = async () => {
    const car = await getCar();
    setclothes(car);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>All The Clothes In the World</h1>
        <h3>
          <i>book for Your Clothes Now</i>
        </h3>
        <br />
        <div className="container">
        <input
          type="text"
          className="input"
          placeholder="can i have your color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <input
          type="text"
          className="input"
          placeholder="can i have your size"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          className="input"
          placeholder="can i have when you one it"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        </div>
        <br /> <br />
        <button onClick={sendMessageToContract} className="button">enter me to get starde</button>
        <button onClick={getMessageToContract} className="button">get your clothes when you like</button>
      </div>
        <div className="container">
      {clothes === null ? (
        <div className="result">no clothes has been order yet</div>
      ) : (
        <div className="result">
          <ol>
            <li>Clothes-Color: {clothes.color}</li>
            <li>Clothes-size: {clothes.brand}</li>
            <li>Clothes: {clothes.model}</li>
          </ol>
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
