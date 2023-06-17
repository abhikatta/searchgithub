import { useState } from "react";
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
const Linedlist = () => {
  const [root, setRoot] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");

  const insertAtBeginning = () => {
    const data = inputValue;
    const node = new Node(data);
    node.next = root;
    setRoot(node);
    setInputValue("");
  };
  const insertAtEnd = () => {
    const data = inputValue;
    let node = new Node(data);
    if (root === null) {
      setRoot(node);
    }
    let current = root;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
    setInputValue("");
  };
  const traverse = () => {
    let output = "";
    let current = root;
    while (current !== null) {
      output += current.data + " -> ";
      current = current.next;
    }
    output += "null";
    setOutput(output);
  };
  const deleteAtEnd = () => {
    if (root === null) {
      return;
    }
    if (root.next === null) {
      setRoot(null);
      return;
    }
    let current = root;
    let prev = null;
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  };
  const deleteAtBeginning = () => {
    if (root !== null) {
      setRoot(root.next);
    }
  };

  return (
    <div>
      <h1>LinkedList</h1>
      <label htmlFor="data-input">Enter Data:</label>
      <input
        type="text"
        id="data-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={insertAtBeginning}>insertAtBeginning</button>
      <button onClick={insertAtEnd}>insertAtEnd</button>
      <button onClick={traverse}>Traverse</button>
      <button onClick={deleteAtBeginning}>DeleteAtBeginning</button>
      <button onClick={deleteAtEnd}>deleteAtEnd</button>
      <div>{output}</div>
    </div>
  );
};

export default Linedlist;
