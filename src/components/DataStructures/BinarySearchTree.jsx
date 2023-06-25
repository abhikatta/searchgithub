import { useActionData } from "react-router-dom";
import "./data-structures.css";
import { useState } from "react";
class Node {
  constructor(data = 0, left = null, right = null) {
    this.left = left;
    this.data = data;
    this.right = right;
  }
}
const BST = () => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState();
  const [root, setRoot] = useState(null);
  const insertAtBeginning = () => {
    current = root;
    let node = Node(inputValue);
    if (current === null) {
      root = node;
    }
  };
  const insertAtEnd = () => {
    if (inputValue > root.left) {
    }
  };
  const deleteAtEnd = () => {};
  const deleteAtBeginning = () => {};
};
