import { NavLink, Link, Outlet, useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1> About Page</h1>
      <hr />
      <h2>useParams Part</h2>
      <li>
        <NavLink to="/user/1">User1</NavLink>
      </li>
      <li>
        <NavLink to="/user/2">User2</NavLink>
      </li>
      <hr />
      <h2>Nested Routing</h2>
      <Link to="a">Open a Page Here</Link>
      <br />
      <Link to="b">Open b Page Here</Link>
      <Outlet />
      <hr />
    </>
  );
}

export default About;
