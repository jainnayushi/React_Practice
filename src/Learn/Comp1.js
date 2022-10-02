import { useState } from "react";

function Comp1(props) {
  const [name, setName] = useState("ayushi"); 

  function changeState() {
    setName("yushi");
  }

  return (
    <>
      <h1>State and Props in Functional Component</h1>
      <br />
      <br />
      <h2>Name : {name}</h2> 
      <button onClick={changeState}>Change Name</button>
      <br />
      <br />
      <h2>Count : {props.count}</h2>
    </>
  );
}

export default Comp1;


// App.js

// import Comp1 from "./Learn/Comp1";
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Change Count{" "}
//       </button>{" "}
//       <hr />
//       <Comp1 count={count} />{" "}
//     </div>
//   );
// }

// export default App;
