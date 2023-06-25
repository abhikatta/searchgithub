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

  const insertion = ({ inputValue, root }) => {
    let current = root;
    let data = inputValue;
    let node = new Node(data);
    if (root === null) {
      setRoot(node);
    }
    if (data < current.data) {
      current.left = insertion(current.left);
    } else if (data > current.data) {
      current.right = insertion(current.right);
    } else {
      return node;
    }
    setInputValue("");
  };
  const DFSTraversal = ({ root }) => {};

  let ans = "";
  if (root !== null) {
    DFSTraversal(root.left);
    ans += root.data;
    DFSTraversal(root.right);
  }
  setOutput(ans);

  return (
    <div className="main">
      <input
        value={inputValue}
        placeholder="Enter Data:"
        onChange={(r) => setInputValue(r.target.value)}
      />
      <button onClick={insertion}>Insert</button>
      <button onClick={DFSTraversal}>Traverse</button>
      <div>{output}</div>
    </div>
  );
};

export default BinarySearchTree;
