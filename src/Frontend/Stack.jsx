// import { useState } from "react";
// const Stack = () => {
//   const [top, setTop] = useState(-1);
//   const [array, setArray] = useState([]);
//   const [isFull, setIsFull] = useState(false);
//   const [isEmpty, setIsEmpty] = useState(true);
//   const [output, setOutput] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const MAX_SIZE = 10;
//   const Push = () => {
//     if (isFull === false) {
//       setTop((prevTop) => prevTop + 1);
//       setArray((prevArray) => [...prevArray, inputValue]);

//       setIsEmpty(false);
//     }
//     if (top === MAX_SIZE) {
//       setIsFull(true);
//     }
//     setInputValue("");
//   };
//   const Pop = () => {
//     if (isEmpty === false) {
//       setTop(top - 1);
//     }
//     if (top === -1) {
//       setIsEmpty(true);
//     }
//   };
//   const Print = () => {
//     const a = array.slice(0, top);
//     setOutput(a);
//   };

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Enter a number"></input>
//         <button onClick={Push}>Push</button>
//         <button onClick={Pop}>Pop</button>
//         <button onClick={Print}>Print</button>
//         <div>{output}</div>
//       </div>
//     </>
//   );
// };

// export default Stack;

// // import React, { useState } from "react";

// // const Stack = () => {
// //   const [stack, setStack] = useState([]);
// //   const [inputValue, setInputValue] = useState("");

// //   const push = () => {
// //     if (inputValue !== "") {
// //       setStack((prevStack) => [inputValue, ...prevStack]);
// //       setInputValue("");
// //     }
// //   };

// //   const pop = () => {
// //     if (stack.length > 0) {
// //       setStack((prevStack) => prevStack.slice(1));
// //     }
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         value={inputValue}
// //         onChange={(e) => setInputValue(e.target.value)}
// //         placeholder="Enter a value"
// //       />
// //       <button onClick={push}>Push</button>
// //       <button onClick={pop}>Pop</button>
// //       <div>Stack: {stack.length === 0 ? "Empty" : stack.join(", ")}</div>
// //     </div>
// //   );
// // };

// // export default Stack;

import React, { useState } from "react";

const Stack = ({ maxSize }) => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [top, setTop] = useState(-1);

  const push = () => {
    if (inputValue !== "" && top < maxSize - 1) {
      setStack((prevStack) => [inputValue, ...prevStack]);
      setInputValue("");
      setTop((prevTop) => prevTop + 1);
    }
  };

  const pop = () => {
    if (top >= 0) {
      setStack((prevStack) => prevStack.slice(1));
      setTop((prevTop) => prevTop - 1);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a value"
      />
      <button onClick={push}>Push</button>
      <button onClick={pop}>Pop</button>
      <div>
        <strong>Top:</strong> {top}
      </div>
      <div>
        <strong>Max Size:</strong> {maxSize}
      </div>
      <div>
        <strong>Stack:</strong>{" "}
        {stack.length === 0 ? "Empty" : stack.join(", ")}
      </div>
    </div>
  );
};

export default Stack;
