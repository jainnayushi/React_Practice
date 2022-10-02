// Lifting state up

function User6(props) {
    const gift = "ayushi"

    return (
        <button onClick={() => props.func(gift)}> Check gift</button>

    )
}

export default User6;


// import User6 from "./User6";
// function App() {

//   function abc(gift) {
//     alert(gift)
//   }

//   return (
//     <div className="App">
//       <User6 func={abc} />
//     </div>
//   );
// }

// export default App