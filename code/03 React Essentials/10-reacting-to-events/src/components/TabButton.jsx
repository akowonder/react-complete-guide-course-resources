export default function TabButton({ children }) {
  function handleClick() {
    console.log('Hello World!');
  }
  //in react you pass your event handlers which issa function as a value.
  //handleClick is passed as a value and then executed by react when a click occurs
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
