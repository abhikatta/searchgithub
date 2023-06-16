export default function Main() {
  const list = [1, 2, 3, 4, 5, 6, 7, "A", "B", "C"];
  const items = [];
  list.forEach((item) => {
    items.push(
      <>
        <button key={item} style={{ height: 70, width: 70, borderRadius: 15 }}>
          {item}
        </button>
        <br></br>
        <br></br>
      </>
    );
  });

  return <>{items}</>;
}
