import { useState } from "react";
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

const DoublyLinkedList = () => {
  const [root, setRoot] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  // this is a test comment
  const insertAtBeginning = () => {
    const data = inputValue;
    const node = new Node(data);
    node.next = root;
    setRoot(node);
    setInputValue("");
  };
  const insertAtEnd = () => {
    const data = inputValue;
    const node = new Node(data);
    if (root === null) {
      setRoot(node);
    } else {
      let current = root;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
    }
    setInputValue("");
  };
  const traverse = () => {
    let current = root;
    let output = "";
    while (current !== null) {
      output += current.data + "↔️";
      current = current.next;
    }
    output += "null";
    setOutput(output);
  };
  const deleteAtEnd = () => {
    if (root === null || root.next === null) {
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
    setRoot(root.next);
  };
  return (
    <div className="main">
      <div>
        <h1>DoublyLinkedList</h1>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Data:"
          className="main"
        />
      </div>
      <button onClick={insertAtBeginning}>insertAtBeginning</button>
      <button onClick={insertAtEnd}>insertAtEnd</button>
      <button onClick={deleteAtBeginning}>deleteAtBeginning</button>
      <button onClick={deleteAtEnd}>deleteAtEnd</button>
      <button onClick={traverse}>Traverse</button>
      <div>{output}</div>
    </div>
  );
};
export default DoublyLinkedList;
