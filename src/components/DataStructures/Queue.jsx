import { useState } from "react";
import "./data-structures.css";
const Queue = () => {
  const [inputValue, setInputValue] = useState();
  const [queue, setQueue] = useState([]);
  const [top, setTop] = useState(-1);
  const [maxSize, setMaxSize] = useState();
  const push = () => {
    if (inputValue !== "" && top < maxSize - 1) {
      setQueue((prevQueue) => [...prevQueue, inputValue]);
      setTop((prevTop) => prevTop + 1);
      setInputValue(" ");
    }
  };
  const pop = () => {};
  return (
    <>
      <div className="main">
        <h2>Queue</h2>
        <input
          placeholder="Enter Size :"
          type="text"
          className="input"
          value={inputValue}
          onChange={(e) => setMaxSize(e.target.value)}></input>
        <br></br>
        <input
          placeholder="Enter value :"
          className="input"
          type="number"
          onChange={(e) => setInputValue(e.target.value)}></input>
        <br></br>

        <button className="button" onClick={push}>
          Push
        </button>
        <button className="button" onClick={pop}>
          Pop
        </button>

        <div>
          <b>Size:</b> {maxSize}
        </div>
        <div>
          <b>Output: [{queue}]</b>
        </div>
      </div>
    </>
  );
};
export default Queue;
