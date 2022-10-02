import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Contact1 from "./Contact1";
import Login from "./Login";
import Page404 from "./Page404";
import User from "./User";
import A from "./A";
import B from "./B";
import Protected from "./Protected";
import Logout from "./Logout";

import Nav from "./Nav";

function App1() {
  return (
    <>
      <Nav />
      <Routes>
        {/* Protected Routes */}
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/contact" element={<Protected Component={Contact} />} />
        {/* Page Doesn't Exist */}
        <Route path="/*" element={<Page404 />} />
        {/* Nested Routing - about page */}
        <Route path="/about/" element={<About />}>
          <Route path="a" element={<A />} />
          <Route path="b" element={<B />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        {/* Params - useParams - about Page*/}
        <Route path="/user/:id" element={<User />} />
        {/* Params - useSearchParams - Contact Page*/}
        <Route path="/contact1" element={<Contact1 />} />
      </Routes>
    </>
  );
}

export default App1;
