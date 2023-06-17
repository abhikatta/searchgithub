import { useState } from "react";
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
const BinarySearchTree = () => {
  const [root, setRoot] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");

  const insertion = () => {
    let current = root;
    let data = inputValue;
    let node = new Node(data);

    while (current !== null) {
      if (data < current.data) {
        current = current.left;
      }
    }
  };
  const DFSTraversal = () => {};
  return (
    <div className="main">
      <input
        value={inputValue}
        placeholder="Enter Data:"
        onChange={(r) => setInputValue(r.target.value)}
      />
      <button onClick={insertion}>Insert</button>
      <button onClick={DFSTraversal}>Insert</button>
    </div>
  );
};
