import { useSearchParams } from "react-router-dom";

function Contact1() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <h1> Contact Page</h1>
      <hr />
      <h3> Get Params</h3>
      {/* Get Params */}
      {/* console.log({searchParams.get("age")}, {searchParams.get("name")}) */}
      <h2>Age : {searchParams.get("age")} </h2>
      <h2>Name : {searchParams.get("name")} </h2>
      {/* Set Params */}
      <hr />
      <h3> Set Params</h3>
      {/* Using button */}
      <button onClick={() => setSearchParams({ age: 40 })}>Set Age</button>
      <br />
      <br />
      {/* Using input field */}
      <input
        type="text"
        placeholder="Set Name"
        onChange={(e) => setSearchParams({ name: e.target.value, age: 35 })}
      />
      <hr />
    </>
  );
}

export default Contact1;
