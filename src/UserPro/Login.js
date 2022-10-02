import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  // localStorage.setItem("login", true);

  const login = () => {
    alert("logged in");
    localStorage.setItem("login", true);
    navigate("/");
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login === "true") {
      navigate("/");
    }
  });

  return (
    <>
      <h1> Login Page</h1>
      <input type="text" />
      <button onClick={login}>Login</button>
    </>
  );
}

export default Login;
