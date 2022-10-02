import { useState } from "react";
function App2() {
  const [watch, setWatch] = useState(0);
  const [started, setStarted] = useState(false); // To enable disable start button
  let adjustInterval = undefined; // To get value of setInterval to stop ater

  const startWatch = () => {
    adjustInterval = setInterval(() => {
      setWatch((pre) => pre + 1);
    }, 1000); // Getting pre state to increase properly, bcoz otherwise it gets printed before increasing
    setStarted(true); // start button will get disbled when true
    console.log("started", adjustInterval);
  };
  const stopWatch = () => {
    console.log(started, adjustInterval);
    clearInterval(adjustInterval);
    setStarted(false);
  };
  const resetWatch = () => {
    setWatch(0);
    clearInterval(adjustInterval);
    setStarted(false);
  };
  return (
    <>
      <h1>Start Stop Reset</h1>
      <h1>{watch}</h1>
      <button disabled={started} onClick={startWatch}>
        Start
      </button>
      <button onClick={stopWatch}>Stop</button>
      <button onClick={resetWatch}>Reset</button>
    </>
  );
}
export default App2;
