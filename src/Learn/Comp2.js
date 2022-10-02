import React, { Component } from "react";

class Comp2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "ayushi",
    };
  }

  changeState() {
    this.setState({ name: "yushi" });
  }
  render() {
    return (
      <>
        <h1>State and Props in Class Component</h1>
        <br />
        <br />
        <h2>Name : {this.state.name}</h2>
        <button onClick={() => this.changeState()}>Change Name</button>
        <br />
        <br />
        <h2>Count : {this.props.count}</h2>
      </>
    );
  }
}

export default Comp2;

// App.js

// import Comp2 from "./Learn/Comp2";
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
//       <Comp2 count={count} />{" "}
//     </div>
//   );
// }

// export default App;
