// Class component Life Cycle Methods

import React from "react";
// On start constructor -> render -> componentDidMount
// On state/prop change -> shouldComponentUpdate(if true) -> render -> componentDidUpdate
export default class User2 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "ayushi",
      count: 0,
    };
    console.log("1. constructor");
  }
  componentDidMount() {
    console.log("3. componentDidMount");
  }
  componentDidUpdate(preProps, preState, snapshot) {
    console.log("22. componentDidUpdate");
    // console.log(preState, snapshot);
  }
  shouldComponentUpdate() {
    console.log("11. shouldComponentUpdate");
    console.log(this.state.count);
    if (this.state.count > 3) {
      return false;
    }
    return true;
  }
  // componentWillUnmount() {
  //   console.log("**** 111. componentWillUnmount");
  // }
  render() {
    console.log("2. render");
    return (
      <div>
        <h1>User2 Page</h1>

        <h1>Inside User2</h1>
        <h1>{this.state.count}</h1>
        {/* <button onClick={() => { this.setState({ data: "ashi" }) }}>Change name</button> */}
        <button
          onClick={() => {
            console.log("--------------------------------");
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Change count
        </button>
      </div>
    );
  }
}

// function App() {
//   const [user, setUser] = useState(true)
//   return (
//     <div className="App">
//       {user ? <User2 /> : console.log("**** user2 not called")}
//       <button onClick={() => setUser(!user)}>Toggle</button>
//     </div>
//   );
// }
