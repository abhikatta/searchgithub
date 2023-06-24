import { useState } from "react";
import "./BubbleSort.css";
import React from "react";
function split(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  //   left = array[:mid]
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  const sortedLeft = split(left);
  const sortedRight = split(right);
  const merged = merge(sortedLeft, sortedRight);
  return merged;
}
function merge(left, right) {
  let mergedsort = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      mergedsort.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedsort.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < left.length) {
    mergedsort.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    mergedsort.push(right[rightIndex]);
    rightIndex++;
  }
  return mergedsort;
}

const MergeSort = () => {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const onClick = () => {
    const inputArray = inputValue.split(" ").map(Number);
    setArray(inputArray);
  };
  return (
    <div className="main">
      <h3>MergeSort</h3>
      <input
        className="input"
        value={inputValue}
        onChange={onChange}
        placeholder="Enter your array (space separated)"></input>
      <br></br>
      <button className="submit-button" onClick={onClick}>
        Enter
      </button>
      <h3>Results:</h3>
      <div>{split(array).join(", ")}</div>
    </div>
  );
};
export default MergeSort;
