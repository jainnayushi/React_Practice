// UseEffect Practice
import { useEffect } from 'react'

function User1(props) {
    useEffect(() => { console.log("useEffect in User") }, [])

    return (
        <div>
            <h1>User1 Page</h1>
            <h1> Value : {props.count} </h1>
        </div>
    )
}
export default User1;


// import User1 from "./user1";
// import { useEffect } from 'react'
// function App() {
//   const [count, setCount] = useState(0)
//   const [cont, setCont] = useState(0)

//   useEffect(() => { console.log("useEffect in App") }, [count])
//   return (
//     <div className="App">
//       <User1 count={count} />
//       <button onClick={() => setCount(count + 1)}>Change Count</button><br />
//       <User1 count={cont} />
//       <button onClick={() => setCont(cont + 1)} >Change Cont</button>

//     </div>
//   );
// }