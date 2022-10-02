import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1> Home Page</h1>
      <hr />
      <h2>Navigate Parts</h2>
      {/* Navigate through Link */}
      <NavLink to="/about">Go to About Page</NavLink>
      <br />
      <br />
      {/* Navigate through Button - useNavigate */}
      <button onClick={() => navigate("/about")}>Go to About Page</button>
      <hr />
    </>
  );
}

export default Home;
