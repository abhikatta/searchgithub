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
      setInputValue("");
      setTop((prevTop) => prevTop + 1);
    }
  };
  const pop = () => {
    if (top >= 0) {
      setQueue((prevQueue) => queue.slice(0, -1));
    }
  };
  return (
    <>
      <div className="main">
        <h2>Queue</h2>
        <input
          placeholder="Enter Size :"
          type="text"
          className="input"
          value={maxSize}
          onChange={(e) => setMaxSize(e.target.value)}></input>
        <br></br>
        <input
          placeholder="Enter value :"
          className="input"
          type="number"
          value={inputValue}
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
          <b>Output: [{queue.length === 0 ? "" : queue.join(", ")}]</b>
        </div>
      </div>
    </>
  );
};
export default Queue;
