import Linedlist from "./LinkedList";
import DoublyLinkedList from "./DoubleList";
import PhotoCarousel from "./PhotoCarousel";
import FindFromGithub from "./FindFromGithub";
const Main = () => {
  return (
    <>
      <Linedlist />
      <DoublyLinkedList />
      {/* <PhotoCarousel /> */}
      <FindFromGithub />
      <footer>Sorry, I suck at CSS.</footer>
    </>
  );
};
export default Main;
