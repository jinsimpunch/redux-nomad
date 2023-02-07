import { useState } from "react";


const useInput = (initialValue, validator) => {

  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value }
    } = e


    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {

      setValue(value)

    }



  }


  return { value, onChange };

}




function App() {

  const maxLen = (value) => !value.includes("@")
  const name = useInput("Mr.", maxLen)


  return (
    <div>
      <h1>hi~!</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
