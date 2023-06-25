import { useState } from "react";
import "./data-structures.css";
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
      output += current.data + "<-->";
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
        <h2>DoublyLinkedList</h2>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Data:"
          className="input"
        />
      </div>
      <button className="button" onClick={insertAtBeginning}>
        insertAtBeginning
      </button>
      <button className="button" onClick={insertAtEnd}>
        insertAtEnd
      </button>
      <button className="button" onClick={deleteAtBeginning}>
        deleteAtBeginning
      </button>
      <button className="button" onClick={deleteAtEnd}>
        deleteAtEnd
      </button>
      <button className="button" onClick={traverse}>
        Traverse
      </button>
      <div>
        <b>DoublyLinkedList: </b>
        {output.length === 0 ? "null" : output}
      </div>
    </div>
  );
};
export default DoublyLinkedList;
