import React, {useState} from 'react';
import './App.css';
import UpDown from "./components/UpDown";

function App() {
  const [a, setA] = useState(4);
  const [b, setB] = useState(6);
  return (
    <div className="App">
      <p>{a + b}</p>
      <UpDown value={a} min={0} max={10} setValue={setA} />
      <UpDown value={b} min={0} max={10} setValue={setB} />
    </div>
  );
}

export default App;
