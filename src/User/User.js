// Handling params here
import { useParams } from 'react-router-dom'
function User() {
    const params = useParams()
    const { name } = params
    return (
        <h1>Hello {name}</h1>
    )
}
export default User
// Creating routes here
// import User8 from "./User8";
// import User1 from "./user1";
// import User2 from "./User2";
// import User3 from "./User3";
// import User from "./User";
// import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

{/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<User8 />} />

          <Route path="/User1" element={<User1 />} />
          <Route path="/User2" element={<User2 />} />
          <Route path="/*" element={<User3 />} />
          <Route path="/user/:name" element={<User />} />

        </Routes></BrowserRouter> */}