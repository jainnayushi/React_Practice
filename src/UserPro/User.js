import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <h1> User Page</h1>
      <h2>Hello User {id} </h2>
    </>
  );
}

export default User;
