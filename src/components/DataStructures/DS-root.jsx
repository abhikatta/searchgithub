import Linkedlist from "./LinkedList";
import DoublyLinkedList from "./DoublyLinkedList";
import Stack from "./Stack";
import Queue from "./Queue";

const DSRoot = () => {
  return (
    <>
      <Stack />
      <hr></hr>
      <Queue />
      <hr></hr>

      <Linkedlist />
      <hr></hr>

      <DoublyLinkedList />
      <hr></hr>
    </>
  );
};

export default DSRoot;
