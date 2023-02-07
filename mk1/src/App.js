import { useState } from "react";


const useInput = () => {





}




function App() {
  const [item, setItem] = useState(0);

  const Increase = () => {
    setItem(item + 1);
  }

  const Decrease = () => {
    setItem(item - 1);
  }

  return (
    <div>
      <h1>
        hi~! {item}</h1>

      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  );
}

export default App;
