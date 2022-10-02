// Uncontrolled component

import { useRef } from "react";
function User7() {
  let inputRef = useRef(null);
  function submitText() {
    console.log("value is", inputRef.current.value);
    inputRef.current.style.backgroundColor = "yellow";
  }
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={submitText}> Submit </button>
    </>
  );
}
export default User7;
