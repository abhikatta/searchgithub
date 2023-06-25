import React, { useState } from "react";
import "./sorting-algorithms.css";
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

const BubbleSort = () => {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);
  const [inputArray, setInputArray] = useState(inputValue);
  const Onchange = (e) => {
    setInputValue(e.target.value);
    setInputArray(inputArray);
  };
  const onClick = () => {
    const inputArray = inputValue.split(",").map(Number);

    setArray(inputArray);
  };

  let size = array.length;

  return (
    <div className="main">
      <h2>BubbleSort</h2>
      <input
        className="input"
        value={inputValue}
        onChange={Onchange}
        placeholder="Enter your array :"></input>
      <br></br>

      <button className="submit-button" onClick={onClick}>
        Enter
      </button>
      <br></br>
      <div>
        <div>
          <b>Input:</b> [{inputValue.length === 0 ? "" : inputValue}]
        </div>
      </div>

      <div>
        <b>Results: </b>[{bubblesort(array, size).join(", ")} ]
      </div>
    </div>
  );
};

export default BubbleSort;
