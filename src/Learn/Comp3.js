import { useState } from "react";

function Comp3() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");

  function getFormData(e) {
    console.log("here");
    console.log(name, tnc, interest);
    e.preventDefault();
  }

  return (
    <div>
      <h1>Handle Form</h1>
      <br />
      <br />
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept Terms and Conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Comp3;
