import { useState } from "react";
import "./BubbleSort.css";
function bubblesort(array, size) {
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      if (array[j] > array[i]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }

  return array;
}

const Bubblesort = () => {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);

  const Onchange = (e) => {
    setInputValue(e.target.value);
  };
  const onClick = () => {
    const inputArray = inputValue.split(" ").map(Number);
    setArray(inputArray);
  };

  let size = array.length;

  return (
    <div className="main">
      <h3>BubbleSort:</h3>
      <input
        className="input"
        value={inputValue}
        onChange={Onchange}
        placeholder="Enter your array (with spaces not commas)"></input>
      <br></br>

      <button className="submit-button" onClick={onClick}>
        Enter
      </button>
      <h3>Results:</h3>
      <div>{bubblesort(array, size).join(", ")}</div>
    </div>
  );
};

export default Bubblesort;
