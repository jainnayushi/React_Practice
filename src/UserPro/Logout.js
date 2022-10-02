import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const logout = () => {
    alert("logged out");
    localStorage.setItem("login", false);
    navigate("/login");
  };

  // useEffect(() => {
  //   localStorage.setItem("login", false);
  //   let login = localStorage.getItem("login");
  //   // if (login) {
  //   //   navigate("/");
  //   // } else {
  //   //   navigate("/login");
  //   // }
  // },[]);

  return (
    <>
      <h1> Logout Page</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Login;
