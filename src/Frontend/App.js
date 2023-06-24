import React from "react";
import BubbleSort from "./BubbleSort";
import MergeSort from "./MergeSort";
import Stack from "./Stack";
const App = () => {
  return (
    <>
      <BubbleSort />
      <MergeSort />
      <Stack maxSize={2} />
    </>
  );
};
export default App;
